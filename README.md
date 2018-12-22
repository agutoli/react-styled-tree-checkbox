react-styled-tree-checkbox
============

Up to date with react/react-dom `16.2.0` and styled-components `4.1.1`

### ATTENTION: Work in Progress (sorry about that!)

## Installation

`npm install react-styled-tree-checkbox --save`

## Example Usage

    import React from 'react'
    import TreeCheckbox from 'react-styled-tree-checkbox'

    const nodes = [
      {
        "value": 11,
        "label": "Facebook",
        "icon": "<YourIcon/>",
        "children": [
          {
            "value": 111,
            "label": "Child node 1.1"
          },
          ...
        ]
      },
      ...
    ]

    const YourReactApp = () => (
      <TreeCheckbox nodes={nodes} showToggleText={true} />
    )
