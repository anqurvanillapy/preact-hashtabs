import { h, Component } from 'preact'

class Tabs extends Component {
  constructor (props) {
    super()

    this.state = {
      hash: this.getLocationHash(),
      tabs: this.copyPropsToState(props.children)
    }

    window.addEventListener('hashchange', () => {
      this.setState({hash: this.getLocationHash()})
    }) 
  }

  getLocationHash = () => window.location.hash.slice(1) || 'default'

  copyPropsToState = (children) => {
    let defaulttab

    return Object.assign(
      children.map(child => {
        const {
          label,
          classname,
          tabdefault,
          activeClassName,
          ...attrs
        } = child.attributes

        if (tabdefault) defaulttab = label

        return {
          [label]: {
            label: label,
            activeClassName: activeClassName,
            tabcontent: child.children,
            attrs: attrs
          }
        }
      }).reduce((prev, next) => Object.assign(prev, next)),
      {default: defaulttab}
    )
  }

  render (props) {
    const {
      tabs,
      hash
    } = this.state
    const activeTab = hash === 'default' ? tabs[tabs.default] : tabs[hash]

    return (
      <ul>
        {
          Object.values(tabs).map(t => (
            typeof (t) === 'object'
            ? <Tab
                label={t.label}
                activeClassName={t.activeClassName}
                tabindex={activeTab ? activeTab.label : null}
                {...t.attrs}
              >
                {t.tabcontent}
              </Tab>
            : null
          ))
        }
      </ul>
    )
  }
}

const Tab = props => {
  const {
    label,
    tabindex,
    activeClassName,
    children,
    ...rest
  } = props
  const clsList = props.class
  const isActive = tabindex === label

  let cls

  if (!isActive) cls = clsList || ''
  else cls = clsList ? `${clsList} ${activeClassName}` : activeClassName

  return (
    <li class={cls}>
      <a href={`#${label}`}>{label}</a>
      {
        isActive
        ? <div {...rest}>{children}</div>
        : null
      }
    </li>
  )
}

export { Tabs, Tab }
