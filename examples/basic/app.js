import React from 'react'
import ReactDOM from 'react-dom'
import ReactStickyfill from '../../lib/index'

class App extends React.Component {
  render() {
    return (
      <div className="example">
        <h1>react-sticky-fill</h1>

        <ReactStickyfill className="stickyExample">
          <header>
            <strong>I am a sticky element</strong>
          </header>
        </ReactStickyfill>

        <div className="content">
          Some content making this page scroll.
        </div>

        <ReactStickyfill className="stickyExample">
          <div>
            <h2>Another one</h2>
            <div>But with some</div>
            <div>more content</div>
          </div>
        </ReactStickyfill>

        <div className="content">
          Some content making this page scroll
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('container'))
