import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers.js';

const _default = autoCssGenerator('root-node-label');
const _childrenLen = autoCssGenerator('root-node-label-children-len');

export default styled.div`
  ${_default('font-size')}
  ${_default('font-weight')}
  ${_default('font-family')}
  ${_default('line-height')}
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  .children-length {
    ${_childrenLen('color')}
    ${_childrenLen('font-size')}
    ${_childrenLen('font-weight')}
    margin-left: 3px;
  }
`
