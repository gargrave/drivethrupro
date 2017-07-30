import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>ONOS! This is the dreaded 404 page!</h2>
      <h4>You are probably looking for one of these pages:</h4>
      <h5>
        <Link to="/orders">View Open Orders</Link>
      </h5>
      <h5>
        <Link to="/orders/new">Create a New Order</Link>
      </h5>
    </div>
  )
}

export default NotFound
