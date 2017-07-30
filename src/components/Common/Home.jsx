import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { number } from 'prop-types'

import { displayAsDollars } from '../../utils/utils'

const HomeRoute = props => {
  function getOrderCountString (count) {
    return `${count} order${count === 1 ? '' : 's'}`
  }

  return (
    <div>
      <h2>DriveThru Pro</h2>

      <hr />
      <h4>Links:</h4>
      <h5>
        <Link to="/orders">View Open Orders</Link>
      </h5>
      <h5>
        <Link to="/orders/new">Create a New Order</Link>
      </h5>

      <hr />
      <h4>Stats:</h4>
      <h5>
        You have <span style={{ color: 'green' }}>completed</span>{' '}
        <strong>{getOrderCountString(props.ordersCompleted)}</strong>, for a total of{' '}
        <strong>{displayAsDollars(props.revenueEarned)}</strong>.
      </h5>
      <h5>
        You have <span style={{ color: 'red' }}>cancelled</span>{' '}
        <strong>{getOrderCountString(props.ordersCancelled)}</strong>, for a total loss of{' '}
        <strong>{displayAsDollars(props.revenueLost)}</strong>.
      </h5>
    </div>
  )
}

HomeRoute.propTypes = {
  ordersCompleted: number.isRequired,
  ordersCancelled: number.isRequired,
  revenueEarned: number.isRequired,
  revenueLost: number.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    ordersCompleted: state.totals.ordersCompleted,
    ordersCancelled: state.totals.ordersCancelled,
    revenueEarned: state.totals.revenueEarned,
    revenueLost: state.totals.revenueLost
  }
}

export default connect(mapStateToProps)(HomeRoute)
