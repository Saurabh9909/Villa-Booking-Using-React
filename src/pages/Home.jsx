import React, { useState } from 'react'
import PropertyComp from '../components/property/PropertyComp'
import ContactFormComp from '../components/contact-detail/ContactFormComp'
import MapComp from '../components/content/MapComp'
import { Navigate, NavLink } from 'react-router-dom'
import BestDealMain from '../components/layouts/BestDealMain'
import PropartyInfoTable from '../components/property/PropartyInfoTable'
import PropertyFilter from '../components/content/PropertyFilter'
import Property from './Property'
import { BestDeal } from '../components/layouts/BestDeal'
function Home() {
  const [user, setUser] = useState("saurabh")
  if (!user) {
    return <Navigate to="/" />
  }
  return (
    <div>
      <div className="main-banner">
        <div className="owl-carousel owl-banner">
          <div className="item item-1">
            <div className="header-text">
              <span className="category">Toronto, <em>Canada</em></span>
              <h2>Hurry!<br />Get the Best Villa for you</h2>
            </div>
          </div>
          <div className="item item-2">
            <div className="header-text">
              <span className="category">Melbourne, <em>Australia</em></span>
              <h2>Be Quick!<br />Get the best villa in town</h2>
            </div>
          </div>
          <div className="item item-3">
            <div className="header-text">
              <span className="category">Miami, <em>South Florida</em></span>
              <h2>Act Now!<br />Get the highest level penthouse</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="featured section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-image">
                <img src="assets/images/featured.jpg" alt="" />
                <NavLink to="/"><img src="assets/images/featured-icon.png" alt="" style={{ maxWidth: '60px', padding: '0px' }} /></NavLink>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="section-heading">
                <h6>| Featured</h6>
                <h2>Best Appartment &amp; Sea view</h2>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Best useful links ?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How does this work ?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Why is Villa Agency the best ?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <PropartyInfoTable />
            </div>
          </div>
        </div>
      </div>
      <div className="video section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Video View</h6>
                <h2>Get Closer View & Different Feeling</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="video-frame">
                <img src="assets/images/video-frame.jpg" alt="" />
                <a href="https://youtube.com" target="_blank"><i className="fa fa-play"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2 className="timer count-title count-number" data-to="34" data-speed="1000"></h2>
                      <p className="count-text ">Buildings<br />Finished Now</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2 className="timer count-title count-number" data-to="12" data-speed="1000"></h2>
                      <p className="count-text ">Years<br />Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2 className="timer count-title count-number" data-to="24" data-speed="1000"></h2>
                      <p className="count-text ">Awwards<br />Won 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section best-deal">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h6>| Best Deal</h6>
                <h2>Find Your Best Deal Right Now!</h2>
              </div>
            </div>
            <BestDeal />
          </div>
        </div>
      </div>
      <div className="contact section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <MapComp />
              <div className="row">
                <div className="col-lg-6">
                  <div className="item phone">
                    <img src="assets/images/phone-icon.png" alt="" style={{ maxWidth: "52px" }} />
                    <h6>010-020-0340<br /><span>Phone Number</span></h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item email">
                    <img src="assets/images/email-icon.png" alt="" style={{ maxWidth: "52px" }} />
                    <h6>info@villa.co<br /><span>Business Email</span></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <ContactFormComp />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home