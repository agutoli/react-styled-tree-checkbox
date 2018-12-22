import React from 'react'
import PropTypes from 'prop-types'

import TreeCheckboxItem from './TreeCheckboxItem'
import TreeCheckboxWrapper from './partials/TreeCheckboxWrapper'

class TreeCheckbox extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      currentSelected: null
    }

    this.onToggleSelectAll = this._onToggleSelectAll.bind(this)
  }

  _onToggleSelectAll(event) {
    this.setState({
      currentSelected: event.target.value
    })
  }

  render() {
    const {
      nodes,
      showToggleText,
      showToggleArrow
    } = this.props

    const { currentSelected } = this.state

    return (
      <TreeCheckboxWrapper>
        {nodes.map((node) => (
          <TreeCheckboxItem
            key={`root-node-item-${node.value}`}
            node={node}
            showToggleText={showToggleText}
            showToggleArrow={showToggleArrow}
            collapsed={currentSelected != node.value}
            onToggleSelectAll={this.onToggleSelectAll} />
        ))}
      </TreeCheckboxWrapper>
    )
  }
}

TreeCheckbox.propTypes = {
  nodes: PropTypes.array,
  showToggleText: PropTypes.bool,
  showToggleArrow: PropTypes.bool
}

TreeCheckbox.defaultProps = {
  nodes: []
}

export default TreeCheckbox
