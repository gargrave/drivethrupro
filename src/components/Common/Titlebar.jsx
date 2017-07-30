import React from 'react'
import { Link } from 'react-router-dom'
import { string } from 'prop-types'

import './Titlebar.css'

const Titlebar = props => {
  const { title, titleLink } = props
  return (
    <div className="titlebar">
      {!titleLink && <span className="title-unlinked">props.title</span>}
      {!!titleLink &&
        <Link to={titleLink} className="title-linked">
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
