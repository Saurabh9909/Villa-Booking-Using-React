import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function UserDetailsError() {
  const error = useRouteError()

  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to users page</Link>
    </div>
  )
}


