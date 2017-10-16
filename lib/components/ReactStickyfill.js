import React from 'react'
import PropTypes from 'prop-types'
import Stickyfill from 'stickyfill'
import supports from 'css-supports'

supports.shim()

const stickyfill = Stickyfill()

class ReactStickyfill extends React.PureComponent {
  componentDidMount() {
    stickyfill.add(this.refs.sticky)
  }
  componentWillUnmount() {
    stickyfill.remove(this.refs.sticky)
  }

  _getPositionStyleValue() {
    const isStickySupported = CSS.supports('position', 'sticky')

    return isStickySupported? 'sticky': '-webkit-sticky'
  }

  render() {
    return (
      <div
        {...this.props}
        ref="sticky"
        style={{
          top: 0,
          zIndex: 1,
          position: this._getPositionStyleValue(),
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
