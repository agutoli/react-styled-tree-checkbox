import styled from 'styled-components'
import { varSize, varColor } from '../cssHelpers.js';

export default styled.span`
  width: 50px;
  cursor: pointer;
  margin-left: 5px;
  color: ${varColor('primary-blue')};
  font-size: ${varSize('typograph-small')};
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
`
