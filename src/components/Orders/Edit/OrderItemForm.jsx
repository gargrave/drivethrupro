import React from 'react'
import { array, func, number, object } from 'prop-types'

import OrderProductMenu from './OrderProductMenu'
import OrderQuantityMenu from './OrderQuantityMenu'
import OrderSizeMenu from './OrderSizeMenu'

const OrderForm = props => {
  return (
    <section>
      <h3>Add an Item</h3>
      <div className="order-item-form">
        <div>
          <OrderProductMenu
            menu={props.menu}
            selectedMenuItem={props.selectedMenuItem}
            handleItemChange={props.handleItemChange}
          />

          <OrderSizeMenu
            sizeIdx={props.sizeIdx}
            availableSizes={props.selectedMenuItem.sizes}
            handleSizeChange={props.handleSizeChange}
          />
          <OrderQuantityMenu quantity={props.quantity} handleQuantityChange={props.handleQuantityChange} />
        </div>

        <div>
          <button className="add-to-order-button" onClick={props.handleAddToOrderClick}>
            Add to Order
          </button>
          <button className="reset-form-button" onClick={props.handleResetFormClick}>
            Reset
          </button>
        </div>
      </div>
    </section>
  )
}

OrderForm.propTypes = {
  menu: array.isRequired,
  selectedMenuItem: object.isRequired,
  handleItemChange: func.isRequired,
  sizeIdx: number.isRequired,
  handleSizeChange: func.isRequired,
  quantity: number.isRequired,
  handleQuantityChange: func.isRequired,
  handleAddToOrderClick: func.isRequired,
  handleResetFormClick: func.isRequired
}

export default OrderForm
