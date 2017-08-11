import { h, render } from 'preact'
import { Tabs, Tab } from './index'

const App = _ => (
  <main>
    <h1><code>preact-tabs</code></h1>
    <h2>Minimal</h2>
    <Tabs>
      <Tab label='foo' activeClassName='active'>
        <ul><li>foo</li></ul>
      </Tab>
      <Tab label='bar' activeClassName='active'>
        <ul><li>bar</li></ul>
      </Tab>
    </Tabs>
    <h2>Stylized</h2>
    <Tabs>
      <Tab label='foo' activeClassName='active'>
        <ul><li>foo</li></ul>
      </Tab>
      <Tab label='bar' activeClassName='active'>
        <ul><li>bar</li></ul>
      </Tab>
    </Tabs>
  </main>
)

render(<App />, document.body)
