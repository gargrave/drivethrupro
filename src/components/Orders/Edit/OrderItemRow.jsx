import React from 'react'
import { func, number, shape, string } from 'prop-types'

import { displayAsDollars } from '../../../utils/utils'

import './OrderItemRow.css'

const OrderItemRow = props => {
  return (
    <tr className="order-item-row">
      <td className="order-item-row-item order-item-row-name">
        {props.item.name}
      </td>
      <td className="order-item-row-item order-item-row-quantity">
        {props.item.quantity} @ {displayAsDollars(props.item.pricePerUnit)}
      </td>
      <td className="order-item-row-item order-item-row-price">
        {displayAsDollars(props.item.pricePerUnit * props.item.quantity)}
      </td>
      <td className="order-item-row-item">
        <span
          className="button button-outline order-item-row-item remove-item-button"
          onClick={props.handleRemoveItemClick}
        >
          Remove
        </span>
      </td>
    </tr>
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
