import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import backgrounds from "@storybook/addon-backgrounds";

import TreeCheckbox from './TreeCheckbox'

function Node(value, label, icon, children = []) {
  return {value, label, icon, children}
}

const nodes = [
  Node(11, 'Facebook', <div name="facebook" />, [
    Node(111, 'Face child 1'),
    Node(112, 'Face child 2'),
    Node(113, 'Face child 3')
  ]),
  Node(12, 'Twitter', <div name="twitter" />, [
    Node(121, 'TWT child 1'),
    Node(122, 'TWT child 2'),
    Node(123, 'TWT child 3')
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
          <TreeCheckbox nodes={nodes} showToggleArrow={true} />
        </div>
      </div>
    </div>
  ))
