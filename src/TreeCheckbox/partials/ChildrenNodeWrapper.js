import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers.js';

const _default = autoCssGenerator('children-node-wrapper');

export default styled.div`
  ${_default('margin-left')}
  ${_default('margin-bottom')}
`
