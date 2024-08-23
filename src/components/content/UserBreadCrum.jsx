import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function UserBreadCrum() {
  const location = useLocation()
  let currentLink = ''
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink = +`/${crumb}`
      return (
        <div className="col-lg-12" key={crumb}>
          <span className="breadcrumb"><Link to={currentLink}>{crumb}</Link></span>
        </div>
      )
    })
  return (
    <div>
      <div>
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              {crumbs}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
