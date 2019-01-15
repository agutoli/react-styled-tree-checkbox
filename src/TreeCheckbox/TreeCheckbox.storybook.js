import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';
import backgrounds from "@storybook/addon-backgrounds";

import TreeCheckbox from './TreeCheckbox'

import FacebookBoxIcon from 'react-pretty-icons/icon/facebook-box'
import TwitterBoxIcon from 'react-pretty-icons/icon/twitter-box'
import InstagramIcon from 'react-pretty-icons/icon/instagram'

function Node(value, label, checked, icon, children = []) {
  return {value, label, checked, icon, children}
}

const nodes = [
  Node(11, 'Facebook', true, <FacebookBoxIcon style={{fill: '#4469B0'}} />, [
    Node(111, 'Child node 1.1'),
    Node(112, 'Child node 1.2'),
    Node(113, 'Child node 1.3')
  ]),
  Node(12, 'Twitter', false, <TwitterBoxIcon style={{fill: '#3CA0F0'}} />, [
    Node(121, 'Child node 2.1', true),
    Node(122, 'Child node 2.2')
  ]),
  Node(13, 'Twitter', false, <InstagramIcon style={{fill: '#F050A0'}} />, [
    Node(131, 'Child node 3.1'),
    Node(132, 'Child node 3.2')
  ]),
]

storiesOf('Molecule/TreeCheckbox', module)
  .add('showToggleText=true', () => (
    <div style={{margin: '20px', width: '100%'}}>
      <div>
        <div style={{margin: '20px', width: '90%', display: 'flex', justifyContent: 'space-around'}}>
          <div>
            <h2>Blue Theme</h2>
            <TreeCheckbox nodes={nodes} showToggleText={true} className="blue-theme" onChange={action('onChange')} />
          </div>
          <div>
            <h2>Red Theme</h2>
            <TreeCheckbox nodes={nodes} showToggleText={true} className="red-theme" />
          </div>
          <div>
            <h2>Green Theme</h2>
            <TreeCheckbox nodes={nodes} showToggleText={true} className="green-theme" />
          </div>
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
  .add('showNativeStyle=true', () => (
    <div style={{margin: '20px', width: '100%'}}>
      <div>
        <div style={{margin: '20px', width: '90%', display: 'flex', justifyContent: 'space-around'}}>
          <TreeCheckbox nodes={nodes} showNativeStyle={true} />
        </div>
      </div>
    </div>
  ))
