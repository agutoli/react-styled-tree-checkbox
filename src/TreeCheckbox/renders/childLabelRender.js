import React from 'react'
import ChildNodeLabel from '../partials/ChildNodeLabel'

export default (node) => {
  return (
    <ChildNodeLabel htmlFor={`root-node-${node.value}`}>{node.label}</ChildNodeLabel>
  )
}
