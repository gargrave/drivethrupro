import { Orders } from '../action-types'

function _createOrder (order) {
  return {
    type: Orders.Create,
    payload: order
  }
}

export function createOrder (order) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(_createOrder(order))
      resolve()
    })
  }
}
