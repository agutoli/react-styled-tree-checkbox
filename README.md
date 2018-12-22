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
          {
            "value": 112,
            "label": "Child node 1.2"
          },
          {
            "value": 113,
            "label": "Child node 1.3"
          }
        ]
      },
      {
        "value": 12,
        "label": "Twitter",
        "icon": "<YourIcon/>",
        "children": [
          {
            "value": 121,
            "label": "Child node 2.1",
          },
          {
            "value": 122,
            "label": "Child node 2.2",
          }
        ]
      },
      {
        "value": 13,
        "label": "Twitter",
        "icon": "<YourIcon/>",
        "children": [
          {
            "value": 131,
            "label": "Child node 3.1"
          },
          {
            "value": 132,
            "label": "Child node 3.2"
          }
        ]
      }
    ]

    class MyComp extends React.Component {
      render() {
        return (
          <TreeCheckbox nodes={nodes} showToggleText={true} />
        )
      }
    }
