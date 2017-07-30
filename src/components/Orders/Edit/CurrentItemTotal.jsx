import React from 'react'
import { number, object } from 'prop-types'

import { displayAsDollars } from '../../../utils/utils'

import './OrderItemForm.css'

const OrderForm = props => {
  const ppu = props.item.sizes[props.sizeIdx].price
  const itemTotal = ppu * props.quantity

  return (
    <div className="item-total-display">
      <h4 style={{ display: 'inline' }}>Add an Item</h4>
      <p>
        Item Total:&nbsp;&nbsp;{props.quantity}x @ {displayAsDollars(ppu)} ={' '}
        <strong>{displayAsDollars(itemTotal)}</strong>
      </p>
    </div>
  )
}

OrderForm.propTypes = {
  item: object.isRequired,
  sizeIdx: number.isRequired,
  quantity: number.isRequired
}

export default OrderForm
