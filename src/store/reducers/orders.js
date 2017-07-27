import { Orders } from '../action-types'

export default function orders (state = [], action) {
  switch (action.type) {
    case Orders.Create:
      console.log('CREATE_ORDER action')
      return state
    default:
      return state
  }
}
