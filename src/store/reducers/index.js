import { combineReducers } from 'redux'

import orders from './orders'
import totals from './totals'

export default combineReducers({
  orders,
  totals
})
