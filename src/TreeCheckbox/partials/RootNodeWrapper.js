import styled from 'styled-components'
import { varColor } from '../cssHelpers.js';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;

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
    width: 18px;
    height: 18px;
  }
`
