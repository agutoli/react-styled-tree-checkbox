import React from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'

const MIN_HEIGHT = 25

function createKeyFrames(height) {
  return styled.div`
    overflow: hidden;
    transition: height 0.2s ease-out;
    height: ${MIN_HEIGHT}px;

    ${props => props.collapsed && `
      height: ${MIN_HEIGHT}px;
    `}

    ${props => !props.collapsed && `
      height: ${height}px;
    `}
  `
}

class ItemWrapper extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      ElementWrapper: createKeyFrames(MIN_HEIGHT),
      enableKeyFrame: false
    }

    this.childrenClientHeight = MIN_HEIGHT;
    this.callRef = this._callRef.bind(this)
  }

  _callRef(child) {
    if (child) {
      const domNode = ReactDOM.findDOMNode(child)
      if (domNode) {
        const rect = domNode.getBoundingClientRect()
        this.childrenClientHeight = this.childrenClientHeight + rect.height
      }
    }
  }

  render() {
    const { ElementWrapper } = this.state
    const Element = ElementWrapper ? ElementWrapper :  styled.div``
    return (
      <Element {...this.props}>
        {React.Children.map(this.props.children, (element, idx) => {
          return React.cloneElement(element, { ref: this.callRef });
        })}
      </Element>
    )
  }

  componentDidMount(props, state) {
    setTimeout(() => {
      this.setState({
        ElementWrapper: createKeyFrames(this.childrenClientHeight)
      })
    }, 100)
  }
}
export default ItemWrapper
