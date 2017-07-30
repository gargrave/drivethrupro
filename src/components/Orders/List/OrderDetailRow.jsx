import React from 'react'
import { func, number, shape } from 'prop-types'

import { displayAsDollars } from '../../../utils/utils'
import Button from '../../Common/Button'

import './OrderDetailRow.css'

const OrderDetailRow = props => {
  const { index, order } = props
  return (
    <tr className="order-item-row">
      <td className="order-item-row-item">
        {index}
      </td>
      <td className="order-item-row-item">
        {order.totalItems}
      </td>
      <td className="order-item-row-item">
        {displayAsDollars(order.totalPrice)}
      </td>
      <td className="order-item-row-item">
        <Button inline outline success className="complete-order-btn" onClick={props.handleCompleteOrderClick}>
          Complete
        </Button>
        <Button inline outline warning className="edit-order-btn" onClick={props.handleEditOrderClick}>
          Edit
        </Button>
        <Button inline outline danger className="cancel-order-btn" onClick={props.handleCancelOrderClick}>
          Cancel
        </Button>
      </td>
    </tr>
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
