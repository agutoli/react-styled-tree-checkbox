import React from 'react'
import styled from 'styled-components'
import { autoCssGenerator } from '../cssHelpers.js';

const _inputWrapper = autoCssGenerator('input-checkbox-wrapper');
const _inputCheckmark = autoCssGenerator('input-checkbox-checkmark');

const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
  cursor: pointer;
  position: absolute;
`

const InputWrapper = styled.label`
  display: block;
  cursor: pointer;
  position: relative;

  ${_inputWrapper('font-size')}
  ${_inputWrapper('user-select')}
  ${_inputWrapper('padding-left')}
  ${_inputWrapper('margin-bottom')}
`

const InputCheckmark = styled.span`
  position: absolute;
  ${_inputCheckmark('top')}
  ${_inputCheckmark('left')}
  ${_inputCheckmark('height')}
  ${_inputCheckmark('width')}
  ${_inputCheckmark('background-color')}
  ${_inputCheckmark('border-width')}
  ${_inputCheckmark('border-style')}
  ${_inputCheckmark('border-color')}
  ${_inputCheckmark('border-radius')}

  &::after {
    content: "";
    display: none;
    position: absolute;
    transform: rotate(45deg);

    ${_inputCheckmark('left', 'after')}
    ${_inputCheckmark('top', 'after')}
    ${_inputCheckmark('width', 'after')}
    ${_inputCheckmark('height', 'after')}
    ${_inputCheckmark('border-style', 'after')}
    ${_inputCheckmark('border-color', 'after')}
    ${_inputCheckmark('border-width', 'after')}
  }

  ${InputWrapper}:hover ${Input} ~ & {
    ${_inputCheckmark('border-color', 'hover')}
    ${_inputCheckmark('background-color', 'hover')}
  }

  ${Input}:checked ~ && {
    ${_inputCheckmark('border-color', 'checked')}
    ${_inputCheckmark('background-color', 'checked')}
  }

  ${Input}:checked ~ &&:hover {
    ${_inputCheckmark('border-color', 'checked-hover')}
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
