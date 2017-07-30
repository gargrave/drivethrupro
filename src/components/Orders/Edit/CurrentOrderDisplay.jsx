import React from 'react'
import { array, func, number, shape } from 'prop-types'

import { displayAsDollars } from '../../../utils/utils'
import OrderItemRow from './OrderItemRow'

import './CurrentOrderDisplay.css'

const CurrentOrderDisplay = props => {
  return (
    <section>
      <h4>
        Current Order:
        <span className="current-order-total-price">
          <strong>
            {displayAsDollars(props.order.totalPrice)}
          </strong>
        </span>
      </h4>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.order.items.map(item =>
            <OrderItemRow
              key={item.id}
              item={item}
              handleRemoveItemClick={e => props.handleRemoveItemClick(e, item.id)}
            />
          )}
        </tbody>
      </table>
    </section>
  )
}

CurrentOrderDisplay.propTypes = {
  order: shape({
    items: array.isRequired,
    totalPrice: number.isRequired
  }).isRequired,
  handleRemoveItemClick: func.isRequired
}

export default CurrentOrderDisplay
