import React from 'react'
import styled, { keyframes } from 'styled-components'

const arrowCollapsed = keyframes`
  to {
    transform: rotate(-90deg);
  }
  from {
    transform: rotate(0);
  }
`;

const arrowExpanded = keyframes`
  to {
    transform: rotate(0);
  }
  from {
    transform: rotate(-90deg);
  }
`;

const ArrowWrapper = styled.i`
  > .react-pretty-icons {
    height: 20px;
    width: 20px;
    cursor: pointer;

    ${props => !props.collapsed && `
      transform: rotate(0);
    `}
    ${props => !props.collapsed && props.enableKeyFrame && `
      animation: ${arrowExpanded} 0.1s ease-in-out;
    `}

    ${props => props.collapsed && `
      transform: rotate(-90deg);
    `}
    ${props => props.collapsed && props.enableKeyFrame  && `
      animation: ${arrowCollapsed} 0.3s ease-in-out;
    `}
  }
`
class AnimatedArrow extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      enableKeyFrame: false
    }
    this._clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(event) {
    this.setState({ enableKeyFrame: true })
    this.props.onClick(event)
  }

  render() {
    return (
      <ArrowWrapper {...this.props} enableKeyFrame={this.state.enableKeyFrame} onClick={this._clickHandler}>
        <div name="arrow-down-drop"  />
      </ArrowWrapper>
    )
  }
}
export default AnimatedArrow
