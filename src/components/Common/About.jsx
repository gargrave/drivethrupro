import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
      <h2>About DriveThru PRO</h2>

      <hr />
      <h5>
        This app was built with love and special attention by Gabe Hargrave. For more information about me, check out my
        site <a href="https://gargrave.us">here</a>.
      </h5>
      <h5>
        You can view the full source and a whole bunch of notes about the project{' '}
        <a href="https://github.com/gargrave/drivethrupro">here</a> on GitHub.
      </h5>

      <hr />
      <h5>If you want to actually use the app, you should try one of these links:</h5>
      <h5>
        <Link to="/orders">View Open Orders</Link>
      </h5>
      <h5>
        <Link to="/orders/new">Create a New Order</Link>
      </h5>
    </section>
  )
}

export default About
