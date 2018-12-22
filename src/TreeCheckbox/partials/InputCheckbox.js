import React from 'react'
import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers.js';

const _default = autoCssGenerator('input-checkbox');

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

const InputWrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 24px;
  margin-bottom: 16px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
`

const InputCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: #F7F7F7;
  border-width: 1px;
  border-style: solid;
  border-color: #DFE3EE;
  border-radius: 3px;

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 5px;
    top: 2px;
    width: 3px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  ${InputWrapper}:hover ${Input} ~ & {
    background-color: #DFE3EE;
  }

  ${Input}:checked ~ && {
    background-color: #8C9EC2;
    border-color: #3C5A96;
  }

  ${Input}:checked ~ &:after {
    display: block;
  }
`

export default (props) => (
  <InputWrapper>
    <Input {...props} type="checkbox" />
    <InputCheckmark className="checkmark" />
  </InputWrapper>
)
