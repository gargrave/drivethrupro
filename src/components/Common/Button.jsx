/*
Simple customizable Button class.

Note that this does depend on Milligram's 'button' CSS classes for a base,
and extends from there.
*/
import React from 'react'
import { any, bool, func } from 'prop-types'

import './Button.css'

const Button = props => {
  function classes () {
    return (
      `button` +
      `${props.outline ? ' button-outline' : ''}` +
      `${props.inline ? ' button-inline' : ''}` +
      `${props.success ? ' button-success' : ''}` +
      `${props.info ? ' button-info' : ''}` +
      `${props.warning ? ' button-warning' : ''}` +
      `${props.danger ? ' button-danger' : ''}` +
      ` ${props.className}`
    )
  }

  return (
    <span className={classes()} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </span>
  )
}

Button.propTypes = {
  children: any,
  className: any,
  disabled: bool,
  outline: bool,
  inline: bool,
  success: bool,
  info: bool,
  warning: bool,
  danger: bool,
  onClick: func.isRequired
}

export default Button
