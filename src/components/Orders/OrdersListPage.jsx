import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array } from 'prop-types'

class OrdersListPage extends Component {
  render () {
    return (
      <div>
        <h2>Orders List Page</h2>
      </div>
    )
  }
}

OrdersListPage.propTypes = {
  orders: array.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    orders: state.orders
  }
}

export default connect(mapStateToProps)(OrdersListPage)
