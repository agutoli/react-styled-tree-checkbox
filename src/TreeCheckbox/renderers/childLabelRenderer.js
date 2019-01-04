import React from 'react'
import ChildNodeLabel from '../partials/ChildNodeLabel'

export default (node) => {
  return (
    <ChildNodeLabel htmlFor={`child-node-${node.value}`}>{node.label}</ChildNodeLabel>
  )
}
