import React from 'react'

function ContactDetailComp() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="item phone">
          <img src="assets/images/phone-icon.png" alt="" style={{ maxWidth: "52px" }} />
          <h6>010-020-0340<br /><span>Phone Number</span></h6>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="item email">
          <img src="assets/images/email-icon.png" alt="" style={{ maxWidth: "52px" }} />
          <h6>info@villa.co<br /><span>Business Email</span></h6>
        </div>
      </div>
    </div>
  )
}

export default ContactDetailComp
