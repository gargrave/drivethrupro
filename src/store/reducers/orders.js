import { Orders } from '../action-types'

export default function orders (state = [], action) {
  const order = action.payload
  switch (action.type) {
    // return state with new order added to the existing list
    case Orders.Create:
      return [...state, order]

    // return state with existing order replaced with updated one
    case Orders.Update:
      return [...state.filter(o => o.id !== order.id), order]

    // return state with the completed order removed from the list
    // (even they are similar, we are keeping this separate from the 'cancel' action in order
    // to easily facilitate the ability to track completed vs. cancelled orders)
    case Orders.Complete:
      return state.filter(o => o.id !== order.id)

    // return state with the completed order removed from the list
    case Orders.Cancel:
      return state.filter(o => o.id !== order.id)

    default:
      return state
  }
}
