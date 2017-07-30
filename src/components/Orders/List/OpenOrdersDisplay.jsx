import React from 'react'
import { array, func } from 'prop-types'

import ManagerAlertNotice from './ManagerAlertNotice'
import OrderDetailRow from './OrderDetailRow'

const OpenOrdersDisplay = props => {
  const { orders } = props
  return (
    <section className="open-orders">
      <h3>Open Orders</h3>
      {orders.length > 4 && <ManagerAlertNotice orderCount={orders.length} />}

      {!orders.length && <h4>There are currently no open orders!</h4>}
      {!!orders.length &&
        <table>
          <thead>
            <tr>
              <th>Order #</th>
              <th># of Items</th>
              <th>Price</th>
              <th />
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => {
              return (
                <OrderDetailRow
                  key={order.id}
                  order={order}
                  index={idx + 1}
                  handleCompleteOrderClick={e => props.handleCompleteOrderClick(e, order.id)}
                  handleEditOrderClick={e => props.handleEditOrderClick(e, order.id)}
                  handleCancelOrderClick={e => props.handleCancelOrderClick(e, order.id)}
                />
              )
            })}
          </tbody>
        </table>}
    </section>
  )
}

OpenOrdersDisplay.propTypes = {
  orders: array.isRequired,
  handleCompleteOrderClick: func.isRequired,
  handleEditOrderClick: func.isRequired,
  handleCancelOrderClick: func.isRequired
}

export default OpenOrdersDisplay
