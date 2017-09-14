import { h, render } from 'preact'
import { Tabs, Tab } from './index'

const App = () => (
  <main>
    <h1><code>preact-hashtabs</code></h1>
    <Tabs>
      <Tab
        tabdefault
        id='foo'
        label='tab0'
        class='foo bar baz'
        activeClassName='active'
      >
        <ul><li>foo</li></ul>
      </Tab>
      <Tab label='tab1' activeClassName='active'>
        <ul><li>bar</li></ul>
      </Tab>
      <Tab label='tab2' activeClassName='active'>
        <ul><li>baz</li></ul>
      </Tab>
      <Tab label='tab3' activeClassName='active'>
        <ul><li>qux</li></ul>
      </Tab>
    </Tabs>
  </main>
)

render(<App />, document.body)
