import { Orders } from '../action-types'

export default function orders (state = [], action) {
  switch (action.type) {
    case Orders.Create:
      return [...state, action.payload]
    default:
      return state
  }
}
