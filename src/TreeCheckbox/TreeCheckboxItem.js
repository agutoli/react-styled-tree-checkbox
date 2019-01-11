import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl';

import ItemWrapper from './partials/ItemWrapper'
import CollapseText from './partials/CollapseText'
import ArrowCollapse from './partials/ArrowCollapse'

import InputCheckbox from './partials/InputCheckbox'
import RootNodeWrapper from './partials/RootNodeWrapper'
import ChildNodeWrapper from './partials/ChildNodeWrapper'
import ChildrenNodeWrapper from './partials/ChildrenNodeWrapper'

import rootLabelRenderer from './renderers/rootLabelRenderer'
import childLabelRenderer from './renderers/childLabelRenderer'

class TreeCheckboxItem extends React.PureComponent {
  constructor(props) {
    super(props)

    const checkedNodes = props.node.children.filter(x => x.checked).map(x => x.value)

    this.state = {
      selectedValues: new Set(checkedNodes),
      collapsed: props.collapsed
    }

    this.onToggleCollape = this._onToggleCollape.bind(this)
    this.onChangeChildField = this._onChangeChildField.bind(this)
    this.onToggleSelectAll = this._onToggleSelectAll.bind(this)

  }

  _onToggleCollape() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  _onChangeChildField({ target }) {
    const { selectedValues } = this.state
    selectedValues[target.checked ? 'add': 'delete'](parseInt(target.value))
    this.setState({ selectedValues: new Set(selectedValues) })
  }

  selectAllItems(node) {
    const { selectedValues } = this.state
    node.children.map((child) => selectedValues.add(parseInt(child.value)))
    this.setState({ selectedValues: new Set(selectedValues) })
  }

  unselectAllItems(node) {
    const { selectedValues } = this.state
    selectedValues.clear()
    this.setState({ selectedValues: new Set(selectedValues) })
  }

  _onToggleSelectAll(event) {
    const { node } = this.props
    const { selectedValues } = this.state

    if (!event.target.checked) {
      this.unselectAllItems(node)
    }

    if (event.target.checked) {
      this.selectAllItems(node)
    }

    this.props.onToggleSelectAll(event)
  }

  renderChildren(children) {
    const { showNativeStyle } = this.props
    const { collapsed, selectedValues } = this.state
    return (
      <ChildrenNodeWrapper data-children-node-wrapper key="children-node-wrapper">
        {children.map((node) => (
          <ChildNodeWrapper key={node.value} data-child-node-wrapper>
          {showNativeStyle ?
            <input
              id={`child-node-${node.value}`}
              type="checkbox"
              value={node.value}
              onChange={this.onChangeChildField} /> :
            <InputCheckbox
              id={`child-node-${node.value}`}
              value={node.value}
              checked={selectedValues.has(node.value)}
              onChange={this.onChangeChildField} />
            }
            {this.props.childLabelRenderer(node)}
          </ChildNodeWrapper>
        ))}
      </ChildrenNodeWrapper>
    )
  }

  componentWillReceiveProps({ collapsed }) {
    this.setState({ collapsed })
  }

  render() {
    const { collapsed, selectedValues } = this.state

    const {
      node,
      showToggleArrow,
      showToggleText,
      showNativeStyle
    } = this.props

    const isAllSelected = selectedValues.size === node.children.length

    return (
      <ItemWrapper collapsed={collapsed}>
        <RootNodeWrapper key={node.value} data-root-node-wrapper>
          {showToggleArrow ? <ArrowCollapse collapsed={collapsed} onClick={this.onToggleCollape} /> : null}
          {showNativeStyle ?
            <input id={`root-node-${node.value}`} type="checkbox" value={node.value} onChange={this.onToggleSelectAll} /> :
            <InputCheckbox
              id={`root-node-${node.value}`}
              value={node.value}
              checked={isAllSelected}
              onChange={this.onToggleSelectAll} />
          }
          {node.icon}
          {this.props.rootLabelRenderer(node, this.props, {
            onToggleCollape: this.onToggleCollape,
            onToggleSelectAll: this.onToggleSelectAll
          })}
          <CollapseText
            className="collapse-expand-menu"
            onClick={this.onToggleCollape}>
            {showToggleText ? collapsed ? (
              <FormattedMessage id="Expand" defaultMessage={`Expand`} />
            ) : (
              <FormattedMessage id="Collapse" defaultMessage={`Collapse`} />
            ): null}
          </CollapseText>
        </RootNodeWrapper>
        {this.renderChildren(node.children)}
      </ItemWrapper>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.node.checked) {
        this.selectAllItems(this.props.node)
      }
    }, 1)
  }
}

TreeCheckboxItem.propTypes = {
  collapsed: PropTypes.bool,
  showChanges: PropTypes.bool,
  showToggleArrow: PropTypes.bool,
  showToggleText: PropTypes.bool,
  rootLabelRenderer: PropTypes.func,
  childLabelRenderer: PropTypes.func,
  onToggleSelectAll: PropTypes.func,
}

TreeCheckboxItem.defaultProps = {
  rootLabelRenderer,
  childLabelRenderer,
  collapsed: false,
  showChanges: true,
  showToggleArrow: false,
  showToggleText: false,
  showNativeStyle: false,
  onToggleSelectAll: () => {}
}

export default TreeCheckboxItem
