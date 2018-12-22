import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers.js';

const _default = autoCssGenerator('collapse-expand-label');

export default styled.span`
  ${_default('color')}
  ${_default('font-size')}
  
  width: 50px;
  cursor: pointer;
  margin-left: 5px;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
`
