import React from 'react'
import PropTypes from 'prop-types'
import Stickyfill from 'stickyfill'

const stickyfill = Stickyfill()

class ReactStickyfill extends React.PureComponent {
  componentDidMount() {
    stickyfill.add(this.refs.sticky)
  }
  componentWillUnmount() {
    stickyfill.remove(this.refs.sticky)
  }

  render() {
    return (
      <div
        {...this.props}
        ref="sticky"
        style={{
          position: '-webkit-sticky',
          top: 0,
          zIndex: 1,
          ...this.props.style
        }}
      />
    )
  }
}

ReactStickyfill.displayName = 'ReactStickyfill'

ReactStickyfill.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string
}

export default ReactStickyfill
