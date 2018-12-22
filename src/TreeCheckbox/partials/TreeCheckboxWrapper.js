import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers.js';

const _default = autoCssGenerator('tree-checkbox-wrapper');

export default styled.div`
  ${_default('color')}
  margin-left: 22px;
  margin-bottom: 24px;
`
