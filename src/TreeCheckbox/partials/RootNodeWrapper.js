import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers.js';

const _default = autoCssGenerator('root-node-wrapper');
const _defaultSVG = autoCssGenerator('root-node-label-children-len');

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${_default('margin-bottom')}


  .collapse-expand-menu {
    visibility: hidden;
  }

  :hover .collapse-expand-menu {
    visibility: visible;
  }

  > i {
    margin-right: 3px;
  }

  > i,
  > i svg {
    ${_defaultSVG('width')}
    ${_defaultSVG('height')}
  }
`
