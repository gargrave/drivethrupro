import { Orders } from '../action-types'

function _createOrder (order) {
  return {
    type: Orders.Create,
    payload: order
  }
}

function _updateOrder (order) {
  return {
    type: Orders.Update,
    payload: order
  }
}

function _completeOrder (order) {
  return {
    type: Orders.Complete,
    payload: order
  }
}

function _cancelOrder (order) {
  return {
    type: Orders.Cancel,
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

export function updateOrder (order) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(_updateOrder(order))
      resolve()
    })
  }
}

export function completeOrder (order) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(_completeOrder(order))
      resolve()
    })
  }
}

export function cancelOrder (order) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(_cancelOrder(order))
      resolve()
    })
  }
}
