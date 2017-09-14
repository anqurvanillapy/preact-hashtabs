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
            className: child.attributes.class || '',
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
      <section {...props}>
        <ul>
          {
            Object.values(tabs).map(t => {
              const isActive = activeTab && activeTab.labelId === t.labelId
              const clsName = t.className
              const cls =
                isActive
                ? `${clsName} ${t.activeClassName}`.trim()
                : clsName

              return typeof (t) === 'object'
                ? <li {...t.attrs} class={cls}>
                    <a href={`#${t.labelId}`}>{t.labelVal}</a>
                  </li>
                : null
            })
          }
        </ul>
        {activeTab ? <Tab>{activeTab.tabcontent}</Tab> : null}
      </section>
    )
  }
}

const Tab = props => {
  return (
    <div>{props.children}</div>
  )
}

export { Tabs, Tab }
