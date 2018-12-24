import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers.js';

const _default = autoCssGenerator('root-node-label');
const _childrenLen = autoCssGenerator('root-node-label-children-len');

export default styled.div`
  display: flex;
  cursor: pointer;
  user-select: none;
  flex-direction: row;
  align-items: center;

  ${_default('font-size')}
  ${_default('font-weight')}
  ${_default('font-family')}
  ${_default('line-height')}

  .children-length {
    ${_childrenLen('color')}
    ${_childrenLen('font-size')}
    ${_childrenLen('font-weight')}
    margin-left: 3px;
  }
`
