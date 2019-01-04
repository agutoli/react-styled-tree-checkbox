import React from 'react'
import RootNodeLabel from '../partials/RootNodeLabel'

export default (node, props, options) => {
  return (
    <RootNodeLabel htmlFor={`root-node-${node.value}`} data-root-node-label>
      {node.label}{' '}
      {props.showChildrenLength ? <span className="children-length">({node.children.length})</span> : null }
    </RootNodeLabel>
  )
}
