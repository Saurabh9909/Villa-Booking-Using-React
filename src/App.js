import React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
// components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

//pages 
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Property, { propertyDetails } from './pages/Property'
import PropertyDetails from './pages/PropertyDetails'
import Error from './pages/Error'
import Users, { tableLoader } from './pages/Users'
import UsersDetails, { UsersDetailsLoader } from './pages/UsersDetails'
import UserDetailsError from './components/ErrorPage/UserDetailsError'
import PropertyComp, { propertyRecord, propertyTypeRecord } from './components/property/PropertyComp'

// layouts
import { RootLayouts } from './components/layouts/RootLayouts'
import { BestDeal } from './components/layouts/BestDeal'
import UserLayout from './components/layouts/UserLayout'
import PropertyLayout from './components/layouts/PropertyLayout'
import PropertyType from './components/ErrorPage/PropertyType'
import { contactAction } from './components/contact-detail/ContactFormComp'
import ScheduleVisit, { scheduleVisitData } from './pages/ScheduleVisit'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayouts />}>
      <Route index element={<Home />} loader={propertyRecord} />
      <Route
        path="/contact"
        element={<Contacts />}
        action={contactAction}
      />
      <Route path="/property" element={<PropertyLayout />} >
        <Route
          path='/property'
          element={<Property />}
          loader={propertyRecord}
          errorElement={<PropertyType />}
        />
        <Route
          path=':id'
          element={<PropertyDetails />}
          loader={propertyDetails}
          errorElement={<PropertyType />}
        />
      </Route>
      <Route path="/users" element={<UserLayout />} errorElement={<UserDetailsError />}>
        <Route
          index
          element={<Users />}
          loader={tableLoader}
        />
        <Route path=':id'
          element={<UsersDetails />}
          loader={UsersDetailsLoader}
          errorElement={<UserDetailsError />}
        />
      </Route>
      <Route
        path='/schedule-visit/:id'
        element={<ScheduleVisit />}
        loader={propertyDetails}
        errorElement={<PropertyType />}
        action={scheduleVisitData}
      />

      <Route path="*" element={<Error />} />
    </Route>
  )
)
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App