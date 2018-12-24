import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers.js';

const _default = autoCssGenerator('collapse-expand-label');

export default styled.span`
  ${_default('color')}
  ${_default('width')}
  ${_default('margin-left')}
  ${_default('font-family')}
  ${_default('font-size')}
`
