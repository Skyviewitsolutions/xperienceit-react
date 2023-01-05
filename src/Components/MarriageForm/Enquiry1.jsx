// This is the first enquiry form;

import React from "react";
import "./marriageForm.css";

const Enquiry1 = () => {
  const allWeddingOptions = [
    { id: 1, name: "Venues" },
    { id: 2, name: "Catering" },
    { id: 3, name: " Photography and video" },
    { id: 4, name: "Jewellery" },
    { id: 5, name: "Wedding planners" },
    { id: 5, name: "Wedding cards" },
    { id: 5, name: "Bridal Accessories" },
    { id: 5, name: "Honeymoon" },
    { id: 5, name: "Transportation" },
    { id: 5, name: "Flowers and Decoration" },
    { id: 5, name: "Groom's Accessories" },
    { id: 5, name: "Health and Beauty" },
    { id: 5, name: "Entertainment" },
    { id: 5, name: "Wedding gifts" },
    { id: 5, name: "Ceremony" },
    { id: 5, name: "Mehendi Artist" },
    { id: 5, name: "Choreographers" },
    { id: 5, name: "Cakes" },
    { id: 5, name: "Other" },
  ];
  return (
    <div className="container  py-5 px-4">
      <h5>About Us</h5>
      <div className="row ">
        <div className="col-lg-6 col-md-12 col-12  mt-2">
          <h6>I AM</h6>
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
            />
            <div className="input-group-append ">
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose</option>
                <option value="bride">Bride</option>
                <option value="groom">Groom</option>
                <option value="relative">Relative</option>
                <option value="guest">Geust</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12 mt-2">
          <h6>MY PARTNER IS</h6>
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
            />
            <div className="input-group-append">
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Choose</option>
                <option value="bride">Bride</option>
                <option value="groom">Groom</option>
                <option value="relative">Relative</option>
                <option value="guest">Geust</option>
              </select>
            </div>
          </div>
        </div>

        <div className=" my-3">
          <h5>Wedding Details</h5>
          <div className="row py-2">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <h6>DATE</h6>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                  min={new Date()}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <h6>NUMBER OF GIFTS</h6>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                  min={1}
                />
              </div>
            </div>
          </div>
            <div className="row d-flex">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3 ">
              <h6>CITY/TOWN</h6>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control "
                  aria-label="Text input with dropdown button"
                  placeholder="Enter city"
                  min={1}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-3 ">
              <h6>COUNTRY</h6>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Text input with dropdown button"
                  placeholder="Enter Country"
                  min={1}
                />
              </div>
              </div>
          </div>

          <div className="row mt-3">
            <h5>Which wedding vendors do you still need?</h5>
            <div className="row my-2 mx-1">
              {allWeddingOptions.map((item, index) => {
                return (
                  <>
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 form-check my-2 d-flex align-items-center"
                      key={index}
                    >
                      <input
                        className="form-check-input mrgCheck "
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                        value={item.name}
                      />
                      <label
                        className="form-check-label mrgLabel"
                        htmlFor="flexCheckDefault"
                      >
                        {item.name}
                      </label>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <button type="button" class="btn enquiryBtn" >Next</button>
        </div>
      </div>
    </div>
  );
};

export default Enquiry1;
