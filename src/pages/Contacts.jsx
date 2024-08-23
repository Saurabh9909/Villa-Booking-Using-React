import React from 'react'
import BreadCrum from '../components/content/BreadCrum'
import ContactFormComp from '../components/contact-detail/ContactFormComp'
import MapComp from '../components/content/MapComp'
import ContactDetailComp from '../components/contact-detail/ContactDetailComp'

function Contacts() {
  return (
    <div>
      <BreadCrum page="Contact" title="Contact" />
      <div class="contact-page section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-heading">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
              </div>
              <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
              <ContactDetailComp />
            </div>
            <div class="col-lg-6">
              <ContactFormComp />
            </div>
            <div class="col-lg-12">
              <MapComp />
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Contacts
