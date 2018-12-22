import styled from 'styled-components'
import { varSize, varColor } from '../cssHelpers.js';

export default styled.label`
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${varSize('typograph-medium')};
  line-height: 16px;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;

  .children-length {
    color: ${varColor('gray-gray')};
    margin-left: 3px;
  }
`
