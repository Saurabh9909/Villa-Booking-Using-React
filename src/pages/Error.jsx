import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1>404 Page Not Found </h1>
      <h3>Go to the <Link to="/">Homepage</Link>.</h3>
    </div>
  )
}

export default Error
