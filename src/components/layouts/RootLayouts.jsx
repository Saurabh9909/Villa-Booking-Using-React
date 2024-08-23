import { Navigate, NavLink, Outlet } from 'react-router-dom'
import ScheduleComp from '../schedule/ScheduleComp'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { useState } from 'react'
export const RootLayouts = () => {
  
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <NavLink to="/" className="logo">
                  <h1>Villa</h1>
                </NavLink>
                <ul className="nav">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/property">Properties</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/users">Table</NavLink>
                  </li>
                  <li>
                    <div>
                      {/* <NavLink to="/"><i className="fa fa-calendar"></i> Schedule a visit</NavLink> */}
                    </div>
                  </li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}