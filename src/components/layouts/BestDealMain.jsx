import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { BestDeal } from './BestDeal'

function BestDealMain() {
  return (
    <div>
      <div className="col-lg-12">
        <div className="tabs-content">
          <div className="row">
            <div className="nav-wrapper ">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <NavLink to="/" className="nav-link">Apprtment</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                  <NavLink to="/villa-house" className="nav-link">Villa House</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                  <NavLink to="/penthouse" className="nav-link">Penthouse</NavLink>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestDealMain
