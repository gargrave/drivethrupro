import React from 'react'
import { array, func, number, shape } from 'prop-types'

import { displayAsDollars } from '../../../utils/utils'
import OrderItemRow from './OrderItemRow'

import './CurrentOrderDisplay.css'

const CurrentOrderDisplay = props => {
  return (
    <section>
      <h3>
        Current Order:
        <span className="current-order-total-price">
          <strong>
            {displayAsDollars(props.order.totalPrice)}
          </strong>
        </span>
      </h3>

      <ul>
        {props.order.items.map(item =>
          <OrderItemRow
            key={item.id}
            item={item}
            handleRemoveItemClick={e => props.handleRemoveItemClick(e, item.id)}
          />
        )}
      </ul>
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
