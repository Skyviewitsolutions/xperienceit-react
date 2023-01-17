import Navebar3 from "../../Components/Common/Navbar/Navebar3";
import Mainpart2 from "../../Components/HomeScreenDetails/TaskBar/Mainpart2";
import TaskBar from "../../Components/HomeScreenDetails/TaskBar/TaskBar";
import "./BookingDetails.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import YellowStar from "./BookingDetailsImages/yellowstar.svg";
import Close from "./BookingDetailsImages/close24.png";
import React, { useState, useEffect, useRef, useCallback } from "react";
import "video-react/dist/video-react.css";
import ReactPlayer from "react-player";
import User from "../../assets/icons/user.png";
// import Marker from "./images/marker.svg";
// import CalenderIcon from "./images/calendar.svg";
import { BiCalendar, BiEdit } from "react-icons/bi";
import parse from "html-react-parser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineClockCircle } from "react-icons/ai";

import { Button, ToggleButton } from "react-bootstrap";
import axios from "axios";
import Cart3 from "../../Components/CartGallary/Cart3";
import ProductReview from "../../Components/ProductScreenDetails/ProductReview";
import Footer2 from "../../Components/Common/Footer/Footer2";
import Modal from "react-modal";
import { style } from "@mui/system";
import { Cancel } from "@material-ui/icons";
import CancelModal from "./CancelModal";

const BookingDetails = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [updateLocation, setUpdateLocation] = useState(false);
  const [taskBarData, setTaskBarData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  const options = {
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "600px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "99",
      backgroundColor: "white",
    },
  };
  return (
    <>
      <div className="BokkingDetails">
        <Navebar3
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          updateLocation={updateLocation}
          setUpdateLocation={setUpdateLocation}
          taskBarData={taskBarData}
        />
        <TaskBar
          updateLocation={updateLocation}
          setTaskBarData={setTaskBarData}
        />
        <div className="booking-details-banner">
          <OwlCarousel className="owl-theme" {...options} nav>
            <div class="item">
              <div className="package-col">
                <div
                  className=" bokkingdtailstbner"
                  style={{ background: "grey", height: "200px" }}
                >
                  <img src="" alt="" />
                </div>
              </div>
            </div>

            {/* <div class="item">
                <div className="media-img">
                  <Skeleton height={350} variant="rectangular" />
                </div>
              </div> */}
          </OwlCarousel>
          <div className="package-details-page">
            <div className="inner-package-section common-container">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="package-left-area">
                      <div className="productLeft_heading">
                        <div className="row">
                          <div className="col-lg-9 col-md-8">
                            <h5>
                              Home/Experiences/ <span>poductCategoryTitle</span>
                            </h5>
                            <h3>productTitle</h3>
                            <div className="product_star">
                              <img src={YellowStar} alt="star" />

                              <h6 className="prdctrtng">productRating</h6>

                              <span>reviewCount review</span>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4"></div>
                        </div>
                      </div>

                      <div className="product_left_para2"></div>

                      <div className="product_left_para gallery_slider common-card">
                        {/* <Cart3/> */}
                      </div>

                      <div className="product_left_details common-card">
                        <h4>Product Details: </h4>
                        {/* <input
                        type="radio"
                        ref={overviewRef}
                        style={{ width: "0px", height: "0px" }}
                      /> */}
                        <div className="product_left_details_box">
                          {/* <ReadMoreAndLess
                          className="read-more-content"
                          charLimit={10}
                          readMoreText="Read more"
                         
                        > */}
                          <h6>titleContent</h6>
                          {/* </ReadMoreAndLess> */}
                        </div>
                      </div>

                      <div className="product_cancellation common-card">
                        <h5>Cancellation Policy:</h5>
                        <div className="product_cancellation_text cancellationPolicy">
                          <h6>parseprops.cancellationPolicy</h6>
                        </div>
                      </div>

                      <div className="product_cancellation common-card">
                        <h5>Refund Policy:</h5>
                        <div className="product_cancellation_text refundPolicy">
                          <h6>refundPolicy</h6>
                        </div>
                      </div>

                      <div className="product_cancellation common-card">
                        <h5>Need To Know</h5>
                        <div className="product_cancellation_text needToKnowText">
                          <h6 className="needToKnow">note</h6>
                        </div>
                      </div>

                      <div className="product_arrngmgnt common-card">
                        <h5>Arrangements</h5>

                        <div className="product_arrngmgnt_text">
                          {/* <img src={Hand} alt="Hand icon" /> */}
                          <h6>arrangment</h6>
                        </div>
                      </div>

                      <div className="product_trust">
                        <h5>Terms & Condition</h5>

                        <div className="product_trust_text termCondition">
                          {/* <img src={Hand} alt="Hand icon" /> */}
                          <h6>termCondition </h6>
                        </div>
                      </div>

                      <div className="product_trust">
                        <h5>FAQ</h5>

                        <div className="product_trust_text faqcontent">
                          {/* <img src={Hand} alt="Hand icon" /> */}
                          <h6>
                            <li>Title</li>
                            <span className="answr">content</span>
                          </h6>
                        </div>
                      </div>

                      <div className="product_trust_exclusion">
                        <h5>Exclusion</h5>
                        {/* <input
                        type="radio"
                        ref={inclusionRef}
                        style={{ width: "0px", height: "0px" }}
                      /> */}
                        <div className="product_trust_text_exclusion">
                          {/* <img src={Hand} alt="Hand icon" /> */}
                          <h6 className="productExclusion">exclusion</h6>
                        </div>
                      </div>

                      <div className="product_trust_vedio">
                        <h5>Xperience Video</h5>
                        {/* <input
                        type="radio"
                        ref={videoRef}
                        style={{ width: "0px", height: "0px" }}
                      /> */}
                        <div className="product_trust_text_vedio">
                          <ReactPlayer
                            className="reactplayer"
                            url=""
                            playsInline
                            controls="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="package-right-area">
                      <div className="product_booking common-card bookings-details-card">
                        <div className="product_booking_input_price">
                          <h6 className="Bookig-details-heading">
                            Bokking Details
                          </h6>
                          <div className="booking-pakages-time-slot">
                            <span> Sun, 14 May, 2022</span>{" "}
                            <span>Time : 10.00 am - 1.00 pm</span>
                          </div>
                          <hr />
                          <div className="bokking-pakage-details">
                            <span>
                              Glorious Black And Golden Bi Glorious Black And
                              Golden Bi
                            </span>{" "}
                            <span>₹2325</span>
                          </div>
                          <div className="customdetails">
                            <span style={{ marginBottom: "10px" }}>
                              {/* Customization <BiEdit /> */}
                            </span>

                            <div className="">
                              <div className="bkngDetails">
                                <h6 className="bkngTitle">Title</h6>
                                <h6 className="bkngQnty">Quantity</h6>
                                <h6 className="bkngPrice">Price</h6>
                              </div>

                              <div className="bkngDetails2">
                                <h6 className="bkngTitle">
                                  Glorious Black And Golden Bi{" "}
                                </h6>
                                <h6 className="bkngQnty">2</h6>
                                <h6 className="bkngPrice">Rs 2325 </h6>
                              </div>
                            </div>

                            {/* <p>No Customization Added</p> */}
                          </div>

                          <hr />
                          <div className="booking-pakage-details-price">
                            <span>Total Cost</span>
                            <span>₹2325</span>
                          </div>
                        </div>

                        <button className="product_btn" onClick={()=>setIsOpen(true)}>
                          Cancel Booking
                        </button>
                       
                      </div>

                      <div className="reiview_product common-card">
                        <h5>Write Reviews</h5>

                        <div className="product_review_text">
                          <h6> Select Star</h6>
                          <ProductReview />
                          <div className="rieview_form mt-2">
                            <lavel className="font-weight-900">
                              Write Description :
                            </lavel>
                            <textarea
                              className="form-control mt-2"
                              rows="4"
                              cols="50"
                              placeholder="Write message ..."
                              //   value={description}
                              //   onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                            <Button className="review_submit mt-3">
                              Submit Review
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="product_reviews">
                        {/* <input
                        type="radio"
                        ref={reviewRef}
                        style={{ width: "0px", height: "0px" }}
                      /> */}
                        <div className="product_Revews_header">
                          <h5>Reviews</h5>
                        </div>
                        <div className="product_revew_details">
                          <>
                            <div className="row no-gutters revwDtlsBox">
                              <div className="col-auto review_customer_img">
                                <img src={User} alt="user image" />
                              </div>
                              <div className="col rivewDetls">
                                <p className="review-customer-name">
                                  user_name
                                </p>
                                <h6
                                  style={{
                                    display: "inline-block",
                                    direction: "ltr",
                                    justifyContent: "center",
                                  }}
                                >
                                  <span className="rivewDetls_rating">
                                    rating
                                  </span>
                                  <img src={YellowStar} alt="star" />
                                </h6>
                                <p className="review-cutomer-content">
                                  description
                                </p>
                              </div>
                            </div>
                          </>

                          <span onClick="">Read more..</span>

                          {/* <span onClick={readLessReview}>Read less...</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CancelModal 
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        />
        <Footer2 />
      </div>
    </>
  );
};

export default BookingDetails;
