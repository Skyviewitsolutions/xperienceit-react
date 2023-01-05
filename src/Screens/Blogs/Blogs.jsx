// This is the blogs section of the experience it;

import React from "react";
import Navebar3 from "../../Components/Common/Navbar/Navebar3";
import "./blogs.css";
import Logo from "../../assets/icons/Layer2.png";
import PostingCard from "../../Components/Blogs/PostingCard/PostingCard";

const Blogs = () => {
  return (
    <div className="container-fluid ">
      <Navebar3 />
      <div className="row blogsCont d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center my-4 ">
          <img src={Logo} alt="" className="blogLogo" />
        </div>
        <div className="col-12 d-flex justify-content-center my-1 flex-column align-items-center">
          <h1 className="fw-bolder ">XperienceIt Guides</h1>
          <h6 className="text-secondary text-uppercase">
            Come XperienceIt with us
          </h6>
        </div>

        {/* adding the bottom container */}
        <div className="px-5 py-5 row d-flex justify-content-between mx-5">
          <div className="col-lg-7 col-md-12 col-sm-12 px-4 py-4 shadow rounded bg-light">
            <PostingCard />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 py-4  px-4 shadow rounded bg-light"></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
