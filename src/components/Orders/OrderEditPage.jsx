import React, { Component } from 'react'
import { connect } from 'react-redux'
import { range } from 'lodash'

import { displayAsDollars } from '../../utils/utils'
import OrderItem from './utils/OrderItem'
import OrderItemRow from './OrderItemRow'
import './OrderEditPage.css'

import menu from '../../data/menu-items'

class OrderEditPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedMenuItem: menu[0],
      sizeIdx: 0,
      quantity: 1,
      orderItems: [],
      orderTotalPrice: 0
    }

    this.completeOrder = this.completeOrder.bind(this)
    this.cancelOrder = this.cancelOrder.bind(this)
    this.handleAddToOrderClick = this.handleAddToOrderClick.bind(this)
    this.handleResetFormClick = this.handleResetFormClick.bind(this)
    this.handleItemChange = this.handleItemChange.bind(this)
    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handleRemoveItemClick = this.handleRemoveItemClick.bind(this)
  }

  resetOrderFormState () {
    this.setState({
      selectedMenuItem: menu[0],
      sizeIdx: 0,
      quantity: 1
    })
  }

  completeOrder () {
    console.log('TODO: implement completeOrder()')
  }

  cancelOrder () {
    console.log('TODO: implement cancelOrder()')
  }

  /**
   * Handler for 'Add to Order' button.
   * Builds a new OrderItem based on currently-selected values,
   * and adds it to the local state's 'orderItems' collection.
   */
  handleAddToOrderClick () {
    const item = this.state.selectedMenuItem
    const orderItem = new OrderItem(item.name, this.state.quantity, item.sizes[this.state.sizeIdx])
    const orderTotalPrice = this.state.orderTotalPrice + orderItem.totalPrice

    this.setState({
      orderItems: [...this.state.orderItems, orderItem],
      orderTotalPrice
    })
  }

  /**
   * Handler for the 'Reset' button.
   * Simply calls the function to reset the form to its default state.
   */
  handleResetFormClick () {
    this.resetOrderFormState()
  }

  /**
   * Handler for change events on the 'Item/Product' dropdown.
   * Updates the currently-selected item on the local state.
   *
   * Note that this also resets the selected size to 0, as the 'sizes'
   * list will be rebuilt for each separate item, and some items will only have one size.
   */
  handleItemChange (event) {
    this.setState({
      selectedMenuItem: menu[event.target.value],
      sizeIdx: 0
    })
  }

  /**
   * Handler for changes events on the 'size' dropdown.
   * Updates the currently-selected size index on the local state.
   */
  handleSizeChange (event) {
    this.setState({ sizeIdx: event.target.value })
  }

  /**
   * Handler for change events on the 'quantity' dropdown menu.
   * Simply updates the 'quantity' property of the local state.
   */
  handleQuantityChange (event) {
    this.setState({ quantity: event.target.value })
  }

  /**
   * Handler for the 'Remove Item' button.
   * Removes and item from the current order, and updates the running total.
   *
   * @param {*} event The default event
   * @param {*} itemID The ID of the item to remove from the order
   */
  handleRemoveItemClick (event, itemID) {
    const orderItem = this.state.orderItems.find(i => i.id === itemID)
    if (orderItem) {
      const orderTotalPrice = this.state.orderTotalPrice - orderItem.totalPrice

      this.setState({
        orderItems: this.state.orderItems.filter(i => i.id !== itemID),
        orderTotalPrice
      })
    }
  }

  render () {
    return (
      <div>
        <h2>Order Edit Page</h2>

        <div>
          <div>
            <button style={{ marginRight: '10px' }} onClick={this.completeOrder}>
              Save Order
            </button>
            <button onClick={this.cancelOrder}>Cancel</button>
          </div>

          <hr />
          <h3>Add an Item</h3>

          <div className="order-item-form">
            <div>
              <span className="input-group">
                <label htmlFor="product">Product: </label>
                <select
                  name="product"
                  id="product"
                  value={this.state.selectedMenuItem.id}
                  onChange={this.handleItemChange}
                >
                  {menu.map(item => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    )
                  })}
                </select>
              </span>

              <span className="input-group">
                <label htmlFor="size">Size: </label>
                <select name="size" id="size" value={this.state.sizeIdx} onChange={this.handleSizeChange}>
                  {this.state.selectedMenuItem.sizes.map((size, idx) => {
                    return (
                      <option key={idx} value={idx}>
                        {size.name}
                      </option>
                    )
                  })}
                </select>
              </span>

              <span className="input-group">
                <label htmlFor="quantity">Qty: </label>
                <select name="quantity" id="quantity" value={this.state.quantity} onChange={this.handleQuantityChange}>
                  {range(1, 11).map(n =>
                    <option key={n} value={n}>
                      {n}
                    </option>
                  )}
                </select>
              </span>
            </div>

            <div>
              <span className="input-group">
                <label htmlFor="notes">Notes:</label>
                <textarea name="notes" id="notes" />
              </span>
            </div>

            <div>
              <button style={{ marginRight: '10px' }} onClick={this.handleAddToOrderClick}>
                Add to Order
              </button>
              <button onClick={this.handleResetFormClick}>Reset</button>
            </div>
          </div>
          <hr />

          <h3>Current Order</h3>
          <h4>
            Total: {displayAsDollars(this.state.orderTotalPrice)}
          </h4>

          <ul>
            {this.state.orderItems.map(item =>
              <OrderItemRow
                key={item.id}
                item={item}
                handleRemoveItemClick={e => this.handleRemoveItemClick(e, item.id)}
              />
            )}
          </ul>
        </div>
      </div>
    )
  }
}

OrderEditPage.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default connect(mapStateToProps)(OrderEditPage)
