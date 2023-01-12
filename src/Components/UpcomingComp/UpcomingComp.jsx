import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./upcoming.css";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import Skeleton from "@mui/material/Skeleton";
import Loader from "../../utils/Loader";

const UpcomingComp = (props) => {
  const { allBookings, getUpcomingBookingList } = props;
  const [loading, setLoading] = useState(false);

  const access_token = localStorage.getItem("access_token");

  const CancelOrder = (data) => {
    const cancelUrl = "https://admin.experienceit.in/api/cancel-bookings";

    const headers = {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    };

    const val = {
      package_id: data.id,
      status: "cancelled",
    };

    setLoading(true);
    axios
      .post(cancelUrl, val, { headers: headers })
      .then((res) => {
        setLoading(false);
        if (res.data.status === true) {
          toast("Booking cancelled Successfully", { type: "success" });
          getUpcomingBookingList();
        } else if (res.data.status === false) {
          toast(res.data.message, { type: "error" });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "this is the eror");
      });
  };

  return (
    <>
      <div className="all-pack-slider inner-row-package">
        <div className="package-section-slider common-container">
          <div className="container-fluid">
            <div className="title-with-button">
              <div className="row">
                <div className="title-col">
                  <h2>
                    <span> Upcomings Bookings</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row comman-card">
              {allBookings.length != 0 &&
                allBookings.map((itm, ind) => {
                  return (
                    <>
                      <div class="col-lg-3 col-md-6 col-12">
                        <div className="package-col">
                          <div className="media-img  coman-img">
                            {itm.image_id ? (
                              <img src={itm.image_id} />
                            ) : (
                              <Skeleton height={250} variant="rectangular" />
                            )}
                          </div>
                          <div className="details">
                            <h3>{itm.title}</h3>
                            <div className="rating-and-discount">
                              <h5>
                                <span>{itm.discount_percent}% off </span>
                              </h5>
                              <div className="rating">
                                <span>{itm.rating}</span>
                                <AiOutlineStar />
                              </div>
                            </div>
                            <div className="price-and-btn">
                              <h4>
                                <span>₹</span>
                                {itm.discounted_price}
                                <s>₹{itm.purchased_price}</s>
                              </h4>
                              <button
                                className="btn"
                                onClick={() => CancelOrder(itm)}
                              >
                                Cancel
                              </button>
                            </div>
                            <div className="upcomingDte">
                              <h6>Date</h6>
                              <h6>:</h6>
                              <h6>{itm.date}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>

            {allBookings.length == 0 && (
              <h6 style={{ marginLeft: "25px" }}>Sorry , No data available</h6>
            )}
          </div>
          {/* <Loader /> */}
        </div>
      </div>
    </>
  );
};

export default UpcomingComp;
