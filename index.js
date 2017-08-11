import { h, Component } from 'preact'

export class Tabs extends Component {
  render (props) {
    return (
      <div {...props}></div>
    )
  }
}

export class Tab extends Component {
  render (props) {
    const {
      children, activeClassName, label, ...other
    } = props
    return (
      <section {...other} role='tab' tabIndex='0' onClick={this._handleClick}>
        {label}
        {children}
      </section>
    )
  }

  _handleClick (e) {
    if (this.props.onClick) this.props.onClick(e, this.props.index)
  }
}
