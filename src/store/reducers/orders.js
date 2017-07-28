import { Orders } from '../action-types'

export default function orders (state = [], action) {
  switch (action.type) {
    // return state with new order added to the existing list
    case Orders.Create:
      return [...state, action.payload]

    // return state with the completed order removed from the list
    // (we are keeping this separate from the 'cancel' action in order
    // to easily facilitate the ability to tracker completed vs. cancelled orders)
    case Orders.Complete:
      return state.filter(order => order.id !== action.payload.id)

    // return state with the completed order removed from the list
    case Orders.Cancel:
      return state.filter(order => order.id !== action.payload.id)

    default:
      return state
  }
}
