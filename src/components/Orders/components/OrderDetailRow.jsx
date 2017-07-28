import React from 'react'
import { number, shape } from 'prop-types'

import { displayAsDollars } from '../../../utils/utils'

const OrderDetailRow = props => {
  const { index, order } = props
  return (
    <div>
      Order #{index} - {order.totalItems} items - {displayAsDollars(order.totalPrice)}
    </div>
  )
}

OrderDetailRow.propTypes = {
  order: shape({
    totalItems: number.isRequired,
    totalPrice: number.isRequired
  }).isRequired,
  index: number.isRequired
}

export default OrderDetailRow
