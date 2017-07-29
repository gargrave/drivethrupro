import React from 'react'
import { func, number, shape, string } from 'prop-types'

import { displayAsDollars } from '../../../utils/utils'

const OrderItemRow = props => {
  return (
    <li>
      {props.item.name} | {props.item.quantity} | {displayAsDollars(props.item.totalPrice)}
      <button onClick={props.handleRemoveItemClick}>Remove</button>
    </li>
  )
}

OrderItemRow.propTypes = {
  item: shape({
    name: string.isRequired,
    quantity: number.isRequired,
    totalPrice: number.isRequired
  }).isRequired,
  handleRemoveItemClick: func.isRequired
}

export default OrderItemRow
