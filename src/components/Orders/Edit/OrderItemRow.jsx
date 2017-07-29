import React from 'react'
import { func, number, shape, string } from 'prop-types'

import { displayAsDollars } from '../../../utils/utils'

import './OrderItemRow.css'

const OrderItemRow = props => {
  return (
    <li className="order-item-row">
      <span className="order-item-row-item order-item-row-name">
        {props.item.name}
      </span>
      <span className="order-item-row-item order-item-row-quantity">
        {props.item.quantity} @ {displayAsDollars(props.item.pricePerUnit)}
      </span>
      <span className="order-item-row-item order-item-row-price">
        {displayAsDollars(props.item.pricePerUnit * props.item.quantity)}
      </span>
      <button className="order-item-row-item remove-item-button" onClick={props.handleRemoveItemClick}>
        Remove
      </button>
    </li>
  )
}

OrderItemRow.propTypes = {
  item: shape({
    name: string.isRequired,
    quantity: number.isRequired,
    pricePerUnit: number.isRequired
  }).isRequired,
  handleRemoveItemClick: func.isRequired
}

export default OrderItemRow
