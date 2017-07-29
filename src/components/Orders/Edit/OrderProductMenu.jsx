import React from 'react'
import { array, func, number, shape } from 'prop-types'

const OrderProductMenu = props => {
  return (
    <span className="input-group">
      <label htmlFor="product">Product: </label>
      <select name="product" id="product" value={props.selectedMenuItem.id} onChange={props.handleItemChange}>
        {props.menu.map(item => {
          return (
            <option key={item.id} value={item.id}>
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
