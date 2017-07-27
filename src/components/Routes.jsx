import React from 'react'
import { Route, Switch } from 'react-router-dom'

import OrderEditPage from './Orders/OrderEditPage'
import OrdersListPage from './Orders/OrdersListPage'
import NotFound from './Common/NotFound'
import Home from './Common/Home'

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/orders/new" component={OrderEditPage} />
      <Route exact path="/orders" component={OrdersListPage} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default routes
