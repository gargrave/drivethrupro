import React from 'react'
import { func, number } from 'prop-types'
import { range } from 'lodash'

const OrderQuantityMenu = props => {
  return (
    <span className="input-group">
      <label htmlFor="quantity">Qty: </label>
      <select
        name="quantity"
        id="quantity"
        className="order-quantity-menu"
        value={props.quantity}
        onChange={props.handleQuantityChange}
      >
        {range(1, props.maxRange + 1).map(n =>
          <option key={n} value={n}>
            {n}
          </option>
        )}
      </select>
    </span>
  )
}

OrderQuantityMenu.defaultProps = {
  maxRange: 20
}

OrderQuantityMenu.propTypes = {
  maxRange: number.isRequired,
  quantity: number.isRequired,
  handleQuantityChange: func.isRequired
}

export default OrderQuantityMenu
