import { Orders } from '../action-types'

export default function orders (state = [], action) {
  switch (action.type) {
    // return state with new order added to the existing list
    case Orders.Create:
      return [...state, action.payload]

    // return state with the completed order removed from the list
    case Orders.Complete:
      return state.filter(order => order.id !== action.payload.id)

    default:
      return state
  }
}
