import React from 'react'
import { array, func, number, object } from 'prop-types'

import Button from '../../Common/Button'
import CurrentItemTotal from './CurrentItemTotal'
import OrderProductMenu from './OrderProductMenu'
import OrderQuantityMenu from './OrderQuantityMenu'
import OrderSizeMenu from './OrderSizeMenu'

import './OrderItemForm.css'

const OrderForm = props => {
  return (
    <section className="order-item-form">
      <CurrentItemTotal item={props.selectedMenuItem} sizeIdx={props.sizeIdx} quantity={props.quantity} />

      <div className="row">
        <div className="column">
          <OrderProductMenu
            menu={props.menu}
            selectedMenuItem={props.selectedMenuItem}
            handleItemChange={props.handleItemChange}
          />
        </div>

        <div className="column">
          <OrderSizeMenu
            sizeIdx={props.sizeIdx}
            availableSizes={props.selectedMenuItem.sizes}
            handleSizeChange={props.handleSizeChange}
          />
        </div>
        <div className="column">
          <OrderQuantityMenu quantity={props.quantity} handleQuantityChange={props.handleQuantityChange} />
        </div>
      </div>

      <Button info className="add-to-order-button" onClick={props.handleAddToOrderClick}>
        Add to Order
      </Button>
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
  handleAddToOrderClick: func.isRequired
}

export default OrderForm
