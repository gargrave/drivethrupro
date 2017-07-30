import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { array, func, object } from 'prop-types'

import { cancelOrder, completeOrder } from '../../../store/actions/order-actions'
import Button from '../../Common/Button'
import OpenOrdersDisplay from './OpenOrdersDisplay'

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

  /**
   * Callback for the "Edit Order" button's 'click' event.
   * Redirects to the "order edit" page for that order's ID.
   *
   * @param {*} event The default event
   * @param {*} orderID The ID of the order to edit
   */
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
    return (
      <div className="orders-list-view">
        <Button onClick={() => this.props.history.push('/orders/new')}>Add an Order</Button>

        <hr />
        <OpenOrdersDisplay
          orders={this.props.orders}
          handleCompleteOrderClick={this.handleCompleteOrderClick}
          handleEditOrderClick={this.handleEditOrderClick}
          handleCancelOrderClick={this.handleCancelOrderClick}
        />
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
