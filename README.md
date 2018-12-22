react-styled-tree-checkbox
============

Up to date with react/react-dom `16.7.0` and styled-components `4.1.3`

### ATTENTION: Work in Progress (sorry about that!)

## Installation

`npm install react-styled-tree-checkbox --save`

#### Screenshot Example
![](https://i.ibb.co/9g04sLw/Screen-Shot-2018-12-22-at-18-52-43.png)

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

## Available CSS variables
<pre>
    --styled-<b>child-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">font-family</a>: "Open Sans", Helvetica, Arial, sans-serif;
    --styled-<b>child-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a>: 14px;
    --styled-<b>child-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-height">line-height</a>: 12px;
    --styled-<b>child-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/user-select">user-select</a>: none;

    --styled-<b>collapse-expand-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color">color</a>: #3C5A96;
    --styled-<b>collapse-expand-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a>: 12px;

    --styled-<b>root-node-label-children-len</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color">color</a>: #ccc;
    --styled-<b>root-node-label-children-len</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a>: 12px;
    --styled-<b>root-node-label-children-len</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">font-weight</a>: normal;

    --styled-<b>root-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">font-family</a>: Tahoma, Helvetica, Arial, sans-serif;
    --styled-<b>root-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a>: 14px;
    --styled-<b>root-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">font-weight</a>: normal;
    --styled-<b>root-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-height">line-height</a>: 16px;

    --styled-<b>tree-checkbox-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color">color</a>: #999FAC;
</pre>
