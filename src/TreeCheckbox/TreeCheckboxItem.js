import React from 'react'
import PropTypes from 'prop-types'

import ItemWrapper from './partials/ItemWrapper'
import CollapseText from './partials/CollapseText'
import ArrowCollapse from './partials/ArrowCollapse'
import RootNodeLabel from './partials/RootNodeLabel'
import InputCheckbox from './partials/InputCheckbox'
import RootNodeWrapper from './partials/RootNodeWrapper'
import ChildNodeWrapper from './partials/ChildNodeWrapper'
import ChildrenNodeWrapper from './partials/ChildrenNodeWrapper'

import childLabelRender from './renders/childLabelRender'

class TreeCheckboxItem extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      selectedValues: new Set([]),
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

  _onToggleSelectAll(event) {
    const { node } = this.props
    const { selectedValues } = this.state

    if (!event.target.checked) {
      selectedValues.clear()
    }

    if (event.target.checked) {
      node.children.map((child) => selectedValues.add(parseInt(child.value)))
    }

    this.setState({ selectedValues: new Set(selectedValues) })
    this.props.onToggleSelectAll(event)
  }

  renderChildren(children) {
    const { collapsed, selectedValues } = this.state
    return (
      <ChildrenNodeWrapper data-children-node-wrapper key="children-node-wrapper">
        {children.map((node) => (
          <ChildNodeWrapper key={node.value} data-child-node-wrapper>
            { console.log(selectedValues, node) }
            <InputCheckbox
              value={node.value}
              checked={selectedValues.has(node.value)}
              id={`root-node-${node.value}`}
              onChange={this.onChangeChildField} />
            {this.props.childLabelRender(node)}
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
      showToggleText
    } = this.props

    const isAllSelected = selectedValues.size === node.children.length

    return (
      <ItemWrapper collapsed={collapsed}>
        <RootNodeWrapper key={node.value} data-root-node-wrapper>
          {showToggleArrow ? <ArrowCollapse collapsed={collapsed} onClick={this.onToggleCollape} /> : null}
          <InputCheckbox
            value={node.value}
            checked={isAllSelected}
            onChange={this.onToggleSelectAll} />
          {node.icon}
          <RootNodeLabel onClick={this.onToggleCollape} data-root-node-label>
            {node.label}{' '}<span className="children-length">({node.children.length})</span>
          </RootNodeLabel>
          <CollapseText
            className="collapse-expand-menu"
            onClick={this.onToggleCollape}>
            {showToggleText ? collapsed ? 'expand' : 'collapse': null}
          </CollapseText>
        </RootNodeWrapper>
        {this.renderChildren(node.children)}
      </ItemWrapper>
    )
  }
}

TreeCheckboxItem.propTypes = {
  collapsed: PropTypes.bool,
  showChanges: PropTypes.bool,
  showToggleArrow: PropTypes.bool,
  showToggleText: PropTypes.bool,
  childLabelRender: PropTypes.func,
  onToggleSelectAll: PropTypes.func,
}

TreeCheckboxItem.defaultProps = {
  childLabelRender,
  collapsed: false,
  showChanges: true,
  showToggleArrow: false,
  showToggleText: false,
  onToggleSelectAll: () => {}
}

export default TreeCheckboxItem
