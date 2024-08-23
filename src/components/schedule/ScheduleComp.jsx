import React from 'react'
import { NavLink } from 'react-router-dom'
function ScheduleComp() {
  return (
    <div>
      <NavLink to="/"><i className="fa fa-calendar"></i> Schedule a visit</NavLink>
    </div>
  )
}

export default ScheduleComp
