import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { array, bool, func, number, object, shape } from 'prop-types'

import { createOrder, updateOrder } from '../../../store/actions/order-actions'
import { displayAsDollars } from '../../../utils/utils'
import OrderItemRow from './OrderItemRow'
import OrderProductMenu from './OrderProductMenu'
import OrderQuantityMenu from './OrderQuantityMenu'
import OrderSizeMenu from './OrderSizeMenu'

import Order from '../utils/Order'
import OrderItem from '../utils/OrderItem'

import './OrderEditPage.css'

import menu from '../../../data/menu-items'

class OrderEditPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedMenuItem: menu[0],
      sizeIdx: 0,
      quantity: 1,
      order: props.order
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

  /**
   * Handler for 'Save Order' button.
   * Sends the current order to the store, and redirects back to list page.
   */
  async completeOrder () {
    if (this.state.order.items.length) {
      if (this.props.editing) {
        console.log('saving updated order...')
        await this.props.updateOrder(this.state.order)
      } else {
        console.log('creating new order...')
        await this.props.createOrder(this.state.order)
      }
      this.props.history.push('/orders')
    }
  }

  /**
   * Handler for 'Cancel' button.
   * Simply route back to the main 'orders list' page.
   */
  cancelOrder () {
    this.props.history.push('/orders')
  }

  /**
   * Handler for 'Add to Order' button.
   * Builds a new OrderItem based on currently-selected values,
   * and adds it to the local state's order's items list.
   */
  handleAddToOrderClick () {
    const menuItem = this.state.selectedMenuItem
    const orderItem = new OrderItem(menuItem.name, this.state.quantity, menuItem.sizes[this.state.sizeIdx])
    const order = new Order(this.state.order)
    order.addItem(orderItem)
    this.setState({ order })
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
    this.setState({ sizeIdx: Number(event.target.value) })
  }

  /**
   * Handler for change events on the 'quantity' dropdown menu.
   * Simply updates the 'quantity' property of the local state.
   */
  handleQuantityChange (event) {
    this.setState({ quantity: Number(event.target.value) })
  }

  /**
   * Handler for the 'Remove Item' button.
   * Removes and item from the current order, and updates the running total.
   *
   * @param {*} event The default event
   * @param {*} itemID The ID of the item to remove from the order
   */
  handleRemoveItemClick (event, itemID) {
    const itemToRemove = this.state.order.items.find(i => i.id === itemID)
    if (itemToRemove) {
      const order = new Order(this.state.order)
      order.removeItem(itemToRemove)
      this.setState({ order })
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
              <OrderProductMenu
                menu={menu}
                selectedMenuItem={this.state.selectedMenuItem}
                handleItemChange={this.handleItemChange}
              />

              <OrderSizeMenu
                sizeIdx={this.state.sizeIdx}
                availableSizes={this.state.selectedMenuItem.sizes}
                handleSizeChange={this.handleSizeChange}
              />
              <OrderQuantityMenu quantity={this.state.quantity} handleQuantityChange={this.handleQuantityChange} />
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
            Total: {displayAsDollars(this.state.order.totalPrice)}
          </h4>

          <ul>
            {this.state.order.items.map(item =>
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

OrderEditPage.propTypes = {
  history: object.isRequired, // react-router history object
  order: shape({
    items: array.isRequired,
    totalPrice: number.isRequired
  }).isRequired,
  editing: bool.isRequired,
  createOrder: func.isRequired,
  updateOrder: func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const orderID = ownProps.match.params.id
  const existingOrder = orderID ? state.orders.find(o => Number(o.id) === Number(orderID)) : null
  const order = existingOrder ? new Order(existingOrder) : new Order()
  const editing = existingOrder !== null

  return {
    order,
    editing
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  createOrder (order) {
    return dispatch(createOrder(order))
  },

  updateOrder (order) {
    return dispatch(updateOrder(order))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderEditPage))
