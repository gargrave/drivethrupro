import React from 'react'
import { array, func, number } from 'prop-types'

const OrderSizeMenu = props => {
  return (
    <span className="input-group">
      <label htmlFor="size">Size: </label>
      <select name="size" id="size" value={props.sizeIdx} onChange={props.handleSizeChange}>
        {props.availableSizes.map((size, idx) => {
          return (
            <option key={idx} value={idx}>
              {size.name}
            </option>
          )
        })}
      </select>
    </span>
  )
}

OrderSizeMenu.propTypes = {
  sizeIdx: number.isRequired,
  availableSizes: array.isRequired,
  handleSizeChange: func.isRequired
}

export default OrderSizeMenu
