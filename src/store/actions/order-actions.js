import { Orders } from '../action-types'

function _createOrder (order) {
  return {
    type: Orders.Create,
    payload: order
  }
}

function _completeOrder (orderID) {
  return {
    type: Orders.Complete,
    payload: { id: orderID }
  }
}

function _cancelOrder (orderID) {
  return {
    type: Orders.Cancel,
    payload: { id: orderID }
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

export function completeOrder (orderID) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(_completeOrder(orderID))
      resolve()
    })
  }
}

export function cancelOrder (orderID) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(_cancelOrder(orderID))
      resolve()
    })
  }
}
