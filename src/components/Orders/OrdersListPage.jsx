import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { array, object } from 'prop-types'

import OrderDetailRow from './components/OrderDetailRow'

class OrdersListPage extends Component {
  render () {
    const { orders } = this.props
    return (
      <div>
        <button onClick={() => this.props.history.push('/orders/new')}>New Order</button>

        <hr />
        <h3>Open Orders</h3>
        {orders.map((order, idx) => {
          return <OrderDetailRow key={order.id} order={order} index={1} />
        })}
      </div>
    )
  }
}

OrdersListPage.propTypes = {
  history: object.isRequired,
  orders: array.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    orders: state.orders
  }
}

export default withRouter(connect(mapStateToProps)(OrdersListPage))
