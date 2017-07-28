import React from 'react'
import { func, number, shape } from 'prop-types'

import { displayAsDollars } from '../../../utils/utils'

const OrderDetailRow = props => {
  const { index, order } = props
  return (
    <div>
      Order #{index} - {order.totalItems} items - {displayAsDollars(order.totalPrice)}
      <button onClick={props.handleCompleteOrderClick}>Complete</button>
      <button onClick={props.handleEditOrderClick}>Edit</button>
      <button onClick={props.handleCancelOrderClick}>Cancel</button>
    </div>
  )
}

OrderDetailRow.propTypes = {
  order: shape({
    totalItems: number.isRequired,
    totalPrice: number.isRequired
  }).isRequired,
  index: number.isRequired,
  handleCompleteOrderClick: func.isRequired,
  handleEditOrderClick: func.isRequired,
  handleCancelOrderClick: func.isRequired
}

export default OrderDetailRow
