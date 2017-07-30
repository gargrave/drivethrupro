import { Orders } from '../action-types'

const defaultState = {
  ordersCompleted: 0,
  ordersCancelled: 0,
  revenueEarned: 0,
  revenueLost: 0
}

export default function orders (state = defaultState, action) {
  const order = action.payload
  switch (action.type) {
    case Orders.Complete:
      return Object.assign({}, state, {
        ordersCompleted: state.ordersCompleted + 1,
        revenueEarned: state.revenueEarned + order.totalPrice
      })

    case Orders.Cancel:
      return Object.assign({}, state, {
        ordersCancelled: state.ordersCancelled + 1,
        revenueLost: state.revenueLost + order.totalPrice
      })

    default:
      return state
  }
}
