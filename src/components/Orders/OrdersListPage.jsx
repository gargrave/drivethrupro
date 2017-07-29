import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { array, func, object } from 'prop-types'

import { cancelOrder, completeOrder } from '../../store/actions/order-actions'
import OrderDetailRow from './components/OrderDetailRow'

class OrdersListPage extends Component {
  constructor (props) {
    super(props)

    this.handleCompleteOrderClick = this.handleCompleteOrderClick.bind(this)
    this.handleEditOrderClick = this.handleEditOrderClick.bind(this)
    this.handleCancelOrderClick = this.handleCancelOrderClick.bind(this)
  }

  /**
   * Handler for the "Complete Order" button's click event.
   * Dispatches the signal tot he store that this order is complete, and can be removed.
   *
   * @param {*} event The default event
   * @param {*} orderID The ID of the order to complete
   */
  async handleCompleteOrderClick (event, orderID) {
    await this.props.completeOrder(orderID)
  }

  handleEditOrderClick (event, orderID) {
    this.props.history.push(`/orders/${orderID}`)
  }

  /**
   * Handler for the "Cancel Order" button's click event.
   * Dispatches the signal tot he store that this order is cancel, and can be removed.
   *
   * @param {*} event The default event
   * @param {*} orderID The ID of the order to cancel
   */
  async handleCancelOrderClick (event, orderID) {
    await this.props.cancelOrder(orderID)
  }

  render () {
    const { orders } = this.props
    return (
      <div>
        <button onClick={() => this.props.history.push('/orders/new')}>New Order</button>

        <hr />
        <h3>Open Orders</h3>
        {!orders.length && <h4>There are currently no open orders!</h4>}
        {!!orders.length &&
          orders.map((order, idx) => {
            return (
              <OrderDetailRow
                key={order.id}
                order={order}
                index={idx + 1}
                handleCompleteOrderClick={e => this.handleCompleteOrderClick(e, order.id)}
                handleEditOrderClick={e => this.handleEditOrderClick(e, order.id)}
                handleCancelOrderClick={e => this.handleCancelOrderClick(e, order.id)}
              />
            )
          })}
      </div>
    )
  }
}

OrdersListPage.propTypes = {
  history: object.isRequired,
  orders: array.isRequired,
  completeOrder: func.isRequired,
  cancelOrder: func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  // sort orders from store by id in asc. order
  const orders = state.orders.sort((a, b) => (a.id < b.id ? -1 : 1))
  return {
    orders
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  completeOrder (orderID) {
    return dispatch(completeOrder(orderID))
  },

  cancelOrder (orderID) {
    return dispatch(cancelOrder(orderID))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrdersListPage))
