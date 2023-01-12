import React from "react";
import "./ProductStickyBar.css";

const ProductStickBar = (props) => {

  const {
    inclusions,
    Overviews,
    showVideo,
    review,
    packagePrice,
    reviews,
    discountedPrice,
  } = props;

  return (
    <>
      <div className="productStickyBar">
        <nav class="navbar navbar-expand-md navbar-light fixed-bottom ">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#"></a>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto mb-2 mb-md-0 ml-5 product_Sticky_contant">
                <li class="nav-item active" onClick={Overviews}>
                  <a class="nav-link" aria-current="page" >
                    Overview
                  </a>
                </li>
                <li class="nav-item active" onClick={inclusions}>
                  <a class="nav-link" >
                    Exclusions
                  </a>
                </li>
                <li class="nav-item active" onClick={review}>
                  <a class="nav-link" >
                    Review
                  </a>
                </li>
                <li class="nav-item active" onClick={showVideo}>
                  <a class="nav-link active" >
                    Video
                  </a>
                </li>
              </ul>
            </div>
            <span className="stickyPackagePrice">Packages Price</span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default ProductStickBar;
