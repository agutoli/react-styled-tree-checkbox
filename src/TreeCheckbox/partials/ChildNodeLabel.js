import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers.js';

const _default = autoCssGenerator('child-node-label');

export default styled.label`
  ${_default('font-size')}
  ${_default('font-family')}
  ${_default('line-height')}
  ${_default('user-select')}
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`
