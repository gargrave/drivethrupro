import React from 'react'
import { func, number } from 'prop-types'
import { range } from 'lodash'

const OrderQuantityMenu = props => {
  return (
    <span className="input-group">
      <label htmlFor="quantity">Qty: </label>
      <select name="quantity" id="quantity" value={props.quantity} onChange={props.handleQuantityChange}>
        {range(1, 11).map(n =>
          <option key={n} value={n}>
            {n}
          </option>
        )}
      </select>
    </span>
  )
}

OrderQuantityMenu.propTypes = {
  quantity: number.isRequired,
  handleQuantityChange: func.isRequired
}

export default OrderQuantityMenu
