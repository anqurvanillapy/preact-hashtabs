import { h, render, Component } from 'preact'
import Router from 'preact-router'
import { Link } from 'preact-router/match'

class WithoutAnchor extends Component { // eslint-disable-line no-unused-vars
  render () {
    return (
      <main>
        <ul>
          <li><Link activeClassName='active' href='/'>Home</Link></li>
          <li><Link activeClassName='active' href='/about'>About</Link></li>
        </ul>
        <hr />
        <Router>
          <section path='/:tab?/:subtab?'>
            <p>contents</p>
            <ul>
              <li><Link activeClassName='active' href='/'>post2</Link></li>
              <li><Link activeClassName='active' href='/post/1'>post1</Link></li>
              <li><Link activeClassName='active' href='/post/0'>post0</Link></li>
            </ul>
            <Router>
              <p path='/'>day 3: fine</p>
              <p path='/post/1'>day 2: okay</p>
              <p path='/post/0'>day 1: good</p>
            </Router>
          </section>
          <p path='/about'>nothing's real.</p>
        </Router>
      </main>
    )
  }
}

class WithAnchor extends Component {
  render () {
    return (
      <main>
        <ul>
          <li><Link activeClassName='active' href='/'>Home</Link></li>
          <li><Link activeClassName='active' href='/about'>About</Link></li>
        </ul>
        <hr />
        <Router>
          <section path='/'>
            <p>contents</p>
            <ul>
              <li><Link activeClassName='active' href='/'>post2</Link></li>
              <li><Link activeClassName='active' href='/#post1'>post1</Link></li>
              <li><Link activeClassName='active' href='/#post0'>post0</Link></li>
            </ul>
            <Router>
              <p path='/'>day 3: fine</p>
              <p path='/#post1'>day 2: okay</p>
              <p path='/#post0'>day 1: good</p>
            </Router>
          </section>
          <p path='/about'>nothing's real.</p>
        </Router>
      </main>
    )
  }
}

// render(<WithoutAnchor />, document.body)
render(<WithAnchor />, document.body) // currently not working
