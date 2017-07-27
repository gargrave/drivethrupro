import React, { Component } from 'react'
import { connect } from 'react-redux'

import './OrderEditPage.css'

import menu from '../../data/menu-items'

class OrderEditPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedMenuItem: menu[0],
      sizeIdx: 0,
      orderItems: [
        { name: menu[0].name, qty: 1, price: menu[0].price },
        { name: menu[1].name, size: menu[1].sizes[1].name, qty: 2, price: menu[1].sizes[1].price }
      ]
    }

    this.completeOrder = this.completeOrder.bind(this)
    this.cancelOrder = this.cancelOrder.bind(this)
    this.addItemToOrder = this.addItemToOrder.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.handleItemSelect = this.handleItemSelect.bind(this)
    this.handleSizeSelect = this.handleSizeSelect.bind(this)
  }

  completeOrder () {
    console.log('completeOrder()')
  }

  cancelOrder () {
    console.log('cancelOrder()')
  }

  addItemToOrder () {
    console.log('addItemToOrder()')
  }

  clearForm () {
    console.log('clearForm()')
  }

  handleItemSelect (event) {
    this.setState({
      selectedMenuItem: menu[event.target.value],
      sizeIdx: 0
    })
  }

  handleSizeSelect (event) {
    console.log('handleSizeSelect')
    console.log(this.state.selectedMenuItem.sizes[event.target.value])
    this.setState({
      sizeIdx: event.target.value
    })
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
                  onChange={this.handleItemSelect}
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
                <select name="size" id="size" value={this.state.sizeIdx} onChange={this.handleSizeSelect}>
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
                <select name="quantity" id="quantity">
                  <option value="Numbers">Numbers</option>
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
              <button style={{ marginRight: '10px' }} onClick={this.addItemToOrder}>
                Add to Order
              </button>
              <button onClick={this.clearForm}>Clear</button>
            </div>
          </div>
          <hr />

          <h3>Current Order</h3>
          <h4>Total: $1.23</h4>

          <ul>
            {this.state.orderItems.map((item, i) => {
              return (
                <li key={i}>
                  {item.name} {item.size && ` | (${item.size})`} | {item.qty} | {item.price * item.qty}
                </li>
              )
            })}
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
