import { h, render } from 'preact'
import { Tabs, Tab } from './index'

const App = () => (
  <main>
    <h1><code>preact-hashtabs</code></h1>
    <Tabs>
      <Tab
        tabdefault
        id='foo'
        label={{tab0: 'Tab 0'}}
        class='foo bar baz'
        activeClassName='active'
      >
        <p>foo</p>
      </Tab>
      <Tab label={{tab1: 'Tab 1'}} activeClassName='active'>
        <p>bar</p>
      </Tab>
      <Tab label={{tab2: 'Tab 2'}} activeClassName='active'>
        <p>baz</p>
      </Tab>
      <Tab label={{tab3: 'Tab 3'}} activeClassName='active'>
        <p>qux</p>
      </Tab>
    </Tabs>
  </main>
)

render(<App />, document.body)
