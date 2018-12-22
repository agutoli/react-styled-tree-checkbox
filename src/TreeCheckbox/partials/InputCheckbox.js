import React from 'react'
import styled from 'styled-components'
import { varColor } from '../cssHelpers.js';

const Input = styled.input`
  margin-right: 8px;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
`

export default (props) => (
  <Input {...props} type="checkbox" />
)
