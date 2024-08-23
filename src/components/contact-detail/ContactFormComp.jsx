import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

function ContactFormComp() {
  const data = useActionData()
  return (
    <div>
      <Form id="contact-form" action="/contact" method="post">
        <div className="row">
          <div className="col-lg-12">
            <fieldset>
              <label htmlFor="name">Full Name</label>
              <input type="name" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
            </fieldset>
          </div>
          <div className="col-lg-12">
            <fieldset>
              <label htmlFor="email">Email Address</label>
              <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
            </fieldset>
          </div>
          <div className="col-lg-12">
            <fieldset>
              <label htmlFor="subject">Subject</label>
              <input type="subject" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
            </fieldset>
          </div>
          <div className="col-lg-12">
            <fieldset>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" placeholder="Your Message"></textarea>
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
  )
}

export default ContactFormComp

export const contactAction = async ({ request }) => {
  // console.log(request);
  const data = await request.formData()

  const submission = {
    name: data.get('name'),
    email: data.get('email'),
    subject: data.get('subject'),
    message: data.get('message')
  }
  console.log(submission);
  // send post request
  if (submission.message.length < 10) {
    return { error: `Message must be over 10 chars long` }
  }
  // redirect the user
  return redirect('/')
}