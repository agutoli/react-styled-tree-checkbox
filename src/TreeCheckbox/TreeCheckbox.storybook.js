import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import backgrounds from "@storybook/addon-backgrounds";

import TreeCheckbox from './TreeCheckbox'

function Node(value, label, icon, children = []) {
  return {value, label, icon, children}
}

const nodes = [
  Node(11, 'Root Node 1', <div name="facebook" />, [
    Node(111, 'Child node 1.1'),
    Node(112, 'Child node 1.2'),
    Node(113, 'Child node 1.3')
  ]),
  Node(12, 'Root Node 2', <div name="twitter" />, [
    Node(121, 'Child node 2.1'),
    Node(122, 'Child node 2.2'),
    Node(123, 'Child node 2.3')
  ]),
]

storiesOf('Molecule/TreeCheckbox', module)
  .add('showToggleText=true', () => (
    <div style={{margin: '20px', width: '100%'}}>
      <div>
        <div style={{margin: '20px', width: '90%', display: 'flex', justifyContent: 'space-around'}}>
          <TreeCheckbox nodes={nodes} showToggleText={true} />
        </div>
      </div>
    </div>
  ))
  .add('showToggleArrow=true', () => (
    <div style={{margin: '20px', width: '100%'}}>
      <div>
        <div style={{margin: '20px', width: '90%', display: 'flex', justifyContent: 'space-around'}}>
          <TreeCheckbox nodes={nodes} showToggleArrow={true} showChildrenLength={true} />
        </div>
      </div>
    </div>
  ))
