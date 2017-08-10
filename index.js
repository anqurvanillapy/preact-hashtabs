import { h, render, Component } from 'preact'
import Router from 'preact-router'
import { Link } from 'preact-router/match'

class App extends Component {
  render () {
    return (
      <main>
        <ul>
          <li><Link activeClassName='active' href='/'>home</Link></li>
          <li><Link activeClassName='active' href='/foo'>foo</Link></li>
          <li><Link activeClassName='active' href='/bar'>bar</Link></li>
        </ul>
        <Router>
          <p path='/'>home</p>
          <p path='/foo'>foo</p>
          <p path='/bar'>bar</p>
        </Router>
      </main>
    )
  }
}

render(<App />, document.body)
