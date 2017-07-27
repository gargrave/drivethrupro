import React, { Component } from 'react'
import { connect } from 'react-redux'

import './OrderEditPage.css'

import menu from '../../data/menu-items'

class OrderEditPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      orderItems: [
        { name: menu[0].name, qty: 1, price: menu[0].price },
        { name: menu[1].name, size: menu[1].sizes[1].name, qty: 2, price: menu[1].sizes[1].price }
      ]
    }
  }

  render () {
    return (
      <div>
        <h2>Order Edit Page</h2>

        <div>
          <div>
            <button style={{ marginRight: '10px' }}>Save Order</button>
            <button>Cancel</button>
          </div>

          <hr />
          <h3>Add an Item</h3>

          <div className="order-item-form">
            <div>
              <span className="input-group">
                <label htmlFor="product">Product: </label>
                <select name="product" id="product">
                  <option value="asdf">Menu Items...</option>
                </select>
              </span>

              <span className="input-group">
                <label htmlFor="size">Size: </label>
                <select name="size" id="size">
                  <option value="asdf">Sizes...</option>
                </select>
              </span>

              <span className="input-group">
                <label htmlFor="quantity">Qty: </label>
                <select name="quantity" id="quantity">
                  <option value="asdf">Numbers...</option>
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
              <button style={{ marginRight: '10px' }}>Add to Order</button>
              <button>Clear</button>
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
