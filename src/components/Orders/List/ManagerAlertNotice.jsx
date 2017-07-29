import React from 'react'
import { number } from 'prop-types'

import './ManagerAlertNotice.css'

const ManagerAlertNotice = props => {
  return (
    <div className="manager-alert">
      {props.orderCount ? props.orderCount : 'Too many '} orders in queue! Manager has been alerted!{' '}
      <strong>Let&apos;s pick it up, people!</strong>
    </div>
  )
}

ManagerAlertNotice.propTypes = {
  orderCount: number
}

export default ManagerAlertNotice
