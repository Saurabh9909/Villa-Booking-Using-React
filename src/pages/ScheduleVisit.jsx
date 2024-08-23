import React from 'react'
import BreadCrum from '../components/content/BreadCrum'
import ContactDetailComp from '../components/contact-detail/ContactDetailComp'
import ContactFormComp from '../components/contact-detail/ContactFormComp'
import { Form, redirect, RouterProvider, useActionData, useLoaderData } from 'react-router-dom'

export default function ScheduleVisit() {
  const property = useLoaderData()
  const data = useActionData()

  return (
    <div>
      <BreadCrum page="Schedule Visit" title="Schedule Visit" />
      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>| Schedule Visit</h6>
                <h2>Schedule your visit and take tour of your dream house</h2>
              </div>
              <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
              <ContactDetailComp />
            </div>
            <div className="col-lg-6">
              <div>
                <Form id="contact-form" action={`/schedule-visit/${property.id}`} method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <input type='hidden' name='id' value={property.id} />
                      <fieldset>
                        <label htmlFor="villa_type">Villa Type</label>
                        <input type="name" name="villa_type" id="villa_type" value={property.villaType} placeholder="Villa Type..." autoComplete="on" required readOnly/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <label htmlFor="villa_address">Vill Address</label>
                        <input type="text" name="villa_address" id="villa_address" value={property.villaAddress} placeholder="Vill Address..." required="" readOnly/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <label htmlFor="visit_date">Date Of Visit</label>
                        <input type="date" name="visit_date" id="visit_date" placeholder="Date Of Visit..." autoComplete="on" />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Your Message" required></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                      </fieldset>
                      {data && data.error && <p>{data.error}</p>}
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export const scheduleVisitData = async ({ request }) => {
  console.log(request);
  const data = await request.formData();

  const submission = {
    propertyId: data.get("id"),
    villaType: data.get("villa_type"),
    villaAddress: data.get("villa_address"),
    visitDate: data.get("visit_date"),
    message: data.get("message")
  }
  console.log(submission);

  if (submission.message.length < 10) {
    return { error: `Message must be over 10 chars long` }
  }
  return redirect("/");
} 