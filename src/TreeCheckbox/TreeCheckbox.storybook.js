import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import backgrounds from "@storybook/addon-backgrounds";

import TreeCheckbox from './TreeCheckbox'

import FacebookBoxIcon from 'react-pretty-icons/icon/facebook-box'
import TwitterBoxIcon from 'react-pretty-icons/icon/twitter-box'
import InstagramIcon from 'react-pretty-icons/icon/instagram'

function Node(value, label, icon, children = []) {
  return {value, label, icon, children}
}

const nodes = [
  Node(11, 'Facebook', <FacebookBoxIcon style={{fill: '#4469B0'}} />, [
    Node(111, 'Child node 1.1'),
    Node(112, 'Child node 1.2'),
    Node(113, 'Child node 1.3')
  ]),
  Node(12, 'Twitter', <TwitterBoxIcon style={{fill: '#3CA0F0'}} />, [
    Node(121, 'Child node 2.1'),
    Node(122, 'Child node 2.2')
  ]),
  Node(13, 'Twitter', <InstagramIcon style={{fill: '#F050A0'}} />, [
    Node(131, 'Child node 3.1'),
    Node(132, 'Child node 3.2')
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
