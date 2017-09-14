# preact-hashtabs

A minimal `<Tabs />` component for
[preact](https://github.com/developit/preact) based on
`window.location.hash`, so it is **not suitable** for complicated use of nested
tabs, and its functionality is yet very simple.

## Usage

- Component properties
  + Activate a tab with `tabdefault` if no hash in current locaion.  If there
  are multiple default tabs, the last one will be enabled
  + `label` property for the link (`<a />`) of a tab
  + `activeClassName` for a class name to append in the active tab's `classList`

## Example

```js
import { h, render } from 'preact'
import { Tabs, Tab } from './index'

const App = _ => (
  <Tabs>
    <Tab
      tabdefault
      label='tab0'
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
)

render(<App />, document.body)
```

## Install

```bash
$ npm i -s preact-hashtabs
```

## License

ISC
