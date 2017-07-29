import React from 'react'
import { Route, Switch } from 'react-router-dom'

import OrderEditPage from './Orders/Edit/OrderEditPage'
import OrdersListPage from './Orders/List/OrdersListPage'
import NotFound from './Common/NotFound'
import Home from './Common/Home'

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/orders/new" component={OrderEditPage} />
      <Route exact path="/orders/:id" component={OrderEditPage} />
      <Route exact path="/orders" component={OrdersListPage} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default routes
