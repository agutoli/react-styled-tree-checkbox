import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers.js';

const _default = autoCssGenerator('child-node-wrapper');

export default styled.div`
  display: flex;
  ${_default('margin-left')}
  ${_default('margin-bottom')}

`
