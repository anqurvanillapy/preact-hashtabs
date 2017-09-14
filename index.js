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

        const labelId = Object.keys(label).pop()
        const labelVal = label[labelId]
        if (tabdefault) defaulttab = labelId

        return {
          [labelId]: {
            labelId: labelId,
            labelVal: labelVal,
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
                labelId={t.labelId}
                labelVal={t.labelVal}
                activeClassName={t.activeClassName}
                tabindex={activeTab ? activeTab.labelId : null}
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
    labelId,
    labelVal,
    tabindex,
    activeClassName,
    children,
    ...rest
  } = props
  const clsList = props.class
  const isActive = tabindex === labelId

  let cls

  if (!isActive) cls = clsList || ''
  else cls = clsList ? `${clsList} ${activeClassName}` : activeClassName

  return (
    <li class={cls}>
      <a href={`#${labelId}`}>{labelVal}</a>
      {
        isActive
        ? <div {...rest}>{children}</div>
        : null
      }
    </li>
  )
}

export { Tabs, Tab }
