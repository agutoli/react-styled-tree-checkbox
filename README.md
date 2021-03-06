react-styled-tree-checkbox
============

Up to date with react/react-dom `16.7.0` and styled-components `4.1.3`

### ATTENTION: Work in Progress (sorry about that!)

## Installation

`npm install react-styled-tree-checkbox --save`

## Demo

[http://agutoli.github.io/react-styled-tree-checkbox/](http://agutoli.github.io/react-styled-tree-checkbox/)

#### Screenshot Example
![](https://i.ibb.co/hyMgSJ4/Screen-Shot-2018-12-22-at-19-17-03.png)


#### CSS Vanilla Themes
![](https://i.ibb.co/K9cVmhW/Screen-Shot-2018-12-24-at-22-12-48.png)

```css
/** Example css **/
.red-theme {
  --styled-input-checkbox-checkmark__border-color--after: red;
  --styled-input-checkbox-checkmark__border-color--checked-hover: red;
}

.blue-theme {
  --styled-input-checkbox-checkmark__border-color--after: blue;
  --styled-input-checkbox-checkmark__border-color--checked-hover: blue;
}

.green-theme {
  --styled-input-checkbox-checkmark__border-color--after: green;
  --styled-input-checkbox-checkmark__border-color--checked-hover: green;
}
```

```html
<!-- JSX example -->
<div>
  <TreeCheckbox nodes={nodes} showToggleText={true} className="blue-theme" />
  <TreeCheckbox nodes={nodes} showToggleText={true} className="green-theme" />
  <TreeCheckbox nodes={nodes} showToggleText={true} className="red-theme" />
</div>
```

## Example Usage
```js
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
```
## Available CSS variables
<pre>
--styled-<b>child-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">font-family</a>: "Open Sans", Helvetica, Arial, sans-serif;
--styled-<b>child-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a>: 14px;
--styled-<b>child-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-height">line-height</a>: 12px;
--styled-<b>child-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/user-select">user-select</a>: none;

--styled-<b>child-node-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom">margin-bottom</a>: 5px;
--styled-<b>child-node-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left">margin-left</a>: 4px;

--styled-<b>children-node-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom">margin-bottom</a>: 10px;
--styled-<b>children-node-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left">margin-left</a>: 20px;

--styled-<b>collapse-expand-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color">color</a>: #3C5A96;
--styled-<b>collapse-expand-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">font-family</a>: "Open Sans", Helvetica, Arial, sans-serif;
--styled-<b>collapse-expand-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a>: 12px;
--styled-<b>collapse-expand-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left">margin-left</a>: 5px;
--styled-<b>collapse-expand-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width">width</a>: 50px;

--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color">background-color</a>: white;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color">background-color</a>--<b>checked</b>: white;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color">background-color</a>--<b>hover</b>: white;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-color">border-color</a>: #DFE3EE;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-color">border-color</a>--<b>after</b>: #3e8ab4;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-color">border-color</a>--<b>checked</b>: #CBCBCB;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-color">border-color</a>--<b>checked-hover</b>: #3e8ab4;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-color">border-color</a>--<b>hover</b>: #CBCBCB;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius">border-radius</a>: 0;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style">border-style</a>: solid;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style">border-style</a>--<b>after</b>: solid;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-width">border-width</a>: 1px;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-width">border-width</a>--<b>after</b>: 0 2px 2px 0;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height">height</a>: 14px;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height">height</a>--<b>after</b>: 6px;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/left">left</a>: 0;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/left">left</a>--<b>after</b>: 5px;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/top">top</a>: 0;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/top">top</a>--<b>after</b>: 2px;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width">width</a>: 14px;
--styled-<b>input-checkbox-checkmark</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width">width</a>--<b>after</b>: 3px;

--styled-<b>input-checkbox-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a>: 22px;
--styled-<b>input-checkbox-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom">margin-bottom</a>: 16px;
--styled-<b>input-checkbox-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left">padding-left</a>: 24px;
--styled-<b>input-checkbox-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/user-select">user-select</a>: none;

--styled-<b>root-node-label-children-len</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color">color</a>: #ccc;
--styled-<b>root-node-label-children-len</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a>: 12px;
--styled-<b>root-node-label-children-len</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">font-weight</a>: normal;

--styled-<b>root-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">font-family</a>: Tahoma, Helvetica, Arial, sans-serif;
--styled-<b>root-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">font-size</a>: 14px;
--styled-<b>root-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">font-weight</a>: normal;
--styled-<b>root-node-label</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-height">line-height</a>: 16px;

--styled-<b>root-node-wrapper-svg</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height">height</a>: 18px;
--styled-<b>root-node-wrapper-svg</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width">width</a>: 18px;

--styled-<b>root-node-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom">margin-bottom</a>: 12px;

--styled-<b>tree-checkbox-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color">color</a>: #999FAC;
--styled-<b>tree-checkbox-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom">margin-bottom</a>: 24px;
--styled-<b>tree-checkbox-wrapper</b>__<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left">margin-left</a>: 22px;
</pre>

## License

The MIT License (MIT)

Copyright (c) 2017-2018 Bruno Agutoli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
