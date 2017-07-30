import React from 'react'
import { Link } from 'react-router-dom'
import { string } from 'prop-types'

import './Titlebar.css'

const Titlebar = props => {
  const { title, titleLink } = props
  return (
    <div className="titlebar">
      {!titleLink && props.title}
      {!!titleLink &&
        <Link to={titleLink}>
          {title}
        </Link>}
    </div>
  )
}

Titlebar.propTypes = {
  title: string.isRequired,
  titleLink: string
}

export default Titlebar
