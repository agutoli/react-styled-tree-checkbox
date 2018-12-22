import React from 'react'
import RootNodeLabel from '../partials/RootNodeLabel'

export default (node, props, options) => {
  return (
    <RootNodeLabel onClick={options.onToggleCollape} data-root-node-label>
      {node.label}{' '}<span className="children-length">({node.children.length})</span>
    </RootNodeLabel>
  )
}
