import React from 'react'
import { array, func, number, shape } from 'prop-types'

const OrderProductMenu = props => {
  return (
    <span className="input-group order-product-menu">
      <label htmlFor="product">Product:</label>
      <select
        name="product"
        id="product"
        className="order-product-select"
        value={props.selectedMenuItem.id}
        onChange={props.handleItemChange}
      >
        {props.menu.map(item => {
          return (
            <option key={item.id} value={item.id} className="order-product-select-option">
              {item.name}
            </option>
          )
        })}
      </select>
    </span>
  )
}

OrderProductMenu.propTypes = {
  menu: array.isRequired,
  selectedMenuItem: shape({
    id: number.isRequired
  }).isRequired,
  handleItemChange: func.isRequired
}

export default OrderProductMenu
