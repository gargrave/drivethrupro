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
      `${props.danger ? ' button-danger' : ''}` +
      ` ${props.className}`
    )
  }

  return (
    <span className={classes()} onClick={props.onClick}>
      {props.children}
    </span>
  )
}

Button.propTypes = {
  children: any,
  className: any,
  outline: bool,
  inline: bool,
  danger: bool,
  onClick: func.isRequired
}

export default Button
