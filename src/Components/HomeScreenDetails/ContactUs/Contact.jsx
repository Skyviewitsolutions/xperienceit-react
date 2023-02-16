import React, { useEffect } from "react";
import Footer2 from "../../Common/Footer/Footer2";
import Navebar3 from "../../Common/Navbar/Navebar3";
import "./Contact.css";
import Banner from "./contactimages.png";
import { TbPhoneCall } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";
import TaskBar from "../TaskBar/TaskBar";
// import TaskBar from "../../Components/HomeScreenDetails/TaskBar/TaskBar";
const Contact = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
  return (
    <>
      <Navebar3 />
      <TaskBar/>
      <div className="container-fluid">
        <div className="contact-slide-image">
          <img src={Banner} />
        </div>
      </div>
      <div className="heding-section">
        <div className="ptb">
          <div className="container">
            <div className="section-title">
              <span className="subtitle">Get in Touch</span>
              <h2>We're Happy To Talk To You</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="pel-address">
                  <ul>
                    <li>
                      <div className="icon">
                        <i>
                          <TbPhoneCall />
                        </i>
                      </div>
                      <p>Phone:</p>
                      <a href="tel:7080581133">+91 7080581133</a>
                    </li>
                  </ul>
                </div>
                <div className="pel-address">
                  <ul>
                    <li>
                      <div className="icon">
                        <i>
                          <GoMail />
                        </i>
                      </div>
                      <p>Email:</p>
                      <a href="mailto:contact@experienceit.in">
                        contact@experienceit.in
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pel-address">
                  <ul>
                    <li>
                      <div className="icon contact-location-icon">
                        <i>
                          <MdOutlineLocationOn />
                        </i>
                      </div>
                      <p>Location:</p>
                      <span>
                        Skyview Smart Solution 529/39 Khurram Nagar, Hans Bhakti
                        Dham, Lucknow, Uttar-Pradesh, 226022
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                {/* <form id="contactForm" className="contact-form">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6 col-md-6 col-xl-6">
                      <div className="form-group has-error">
                        <input
                          type="text"
                          class="form-control"
                          required=""
                          data-error="Please enter your name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6 col-xl-6">
                      <div className="form-group has-error">
                        <input
                          type="email"
                          className="form-control"
                          required=""
                          data-error="Please enter your email"
                          placeholder="email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6 col-xl-6">
                      <div className="form-group has-error">
                        <input
                          type="phone"
                          className="form-control"
                          required=""
                          data-error="Please enter your phone no"
                          placeholder="phone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-md-6 col-xl-6">
                      <div className="form-group has-error">
                        <input
                          type="text"
                          className="form-control"
                          required=""
                          data-error="Please enter your subject"
                          placeholder="subjet"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group has-error">
                        <textarea
                          className="form-control textarea"
                          cols="30"
                          rows="8"
                          required=""
                          data-error="Write your message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <button
                        className="book-btn disabled"
                        type="submit"
                        style={{pointerEvents: "all", cursor: "pointer"}}
                      >
                        Send Message
                      </button>

                      <div id="msgSubmit" className="h3 text-center hidden"></div>
                     
                    </div>
                  </div>
                </form> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.316790706988!2d80.97031041499748!3d26.893439483135854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995754fadda861%3A0xbddcc736f4743c8f!2sSkyview%20Smart%20Solutions!5e0!3m2!1sen!2ssg!4v1676269393755!5m2!1sen!2ssg"
                  height="450"
                  style={{ border: "0", width: "100%" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="contact-map">
       
        </div> */}
      </div>
      <Footer2 />
    </>
  );
};

export default Contact;
