import React from 'react'
import PropTypes from 'prop-types'

import TreeCheckboxItem from './TreeCheckboxItem'
import TreeCheckboxWrapper from './partials/TreeCheckboxWrapper'

class TreeCheckbox extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      checkedItems: this.getInitialCheckedItems(props),
      currentSelected: null
    }

    this.onToggleSelectAll = this._onToggleSelectAll.bind(this)
    this.onChangeItems = this._onChangeItems.bind(this)
  }

  getInitialCheckedItems(props) {
    return props.nodes.reduce((s, c) => {
      s[c.value] = c.children.filter(x => x.checked).map(x => x.value)
      return s
    }, {})
  }

  _onToggleSelectAll(event) {
    this.setState({
      currentSelected: event.target.value
    })
  }

  _onChangeItems(rootId, items) {
    this.state.checkedItems[rootId] = items
    this.setState({
      checkedItems: this.state.checkedItems
    }, () => {
      this.props.onChange(this.state.checkedItems)
    })
  }

  render() {
    const {
      nodes,
      className,
      showToggleText,
      showToggleArrow,
      showNativeStyle,
      showChildrenLength
    } = this.props

    const { currentSelected, checkedItems } = this.state

    return (
      <TreeCheckboxWrapper className={className}>
        {nodes.map((node) => (
          <TreeCheckboxItem
            key={`root-node-item-${node.value}`}
            node={node}
            onChange={this.onChangeItems}
            showNativeStyle={showNativeStyle}
            showToggleText={showToggleText}
            showToggleArrow={showToggleArrow}
            showChildrenLength={showChildrenLength}
            collapsed={currentSelected != node.value}
            onToggleSelectAll={this.onToggleSelectAll} />
        ))}
      </TreeCheckboxWrapper>
    )
  }
}

TreeCheckbox.propTypes = {
  nodes: PropTypes.array,
  onChange: PropTypes.func,
  showChildrenLength: PropTypes.bool,
  showToggleText: PropTypes.bool,
  showToggleArrow: PropTypes.bool
}

TreeCheckbox.defaultProps = {
  nodes: [],
  onChange: () => {},
  showChildrenLength: false
}

export default TreeCheckbox
