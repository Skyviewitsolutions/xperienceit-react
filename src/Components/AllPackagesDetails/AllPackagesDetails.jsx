import React, { useEffect } from "react";
import "./AllPackagesDetails.css";
import Skeleton from "@mui/material/Skeleton";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, generatePath } from "react-router-dom";
import Star from "./star.svg";
import {
  AiOutlineStar,
  AiOutlineHeart,
  AiTwotoneHeart,
  AiFillLike,
} from "react-icons/ai";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { callWishListData, updateWishList } from "../../actions";
import { useState } from "react";
import { endpoints } from "../../services/endpoints";

const AllPackagesDetailsCard = (props) => {
  const pkgLocation = localStorage.getItem("locationDetails");
  const cityLocattion = JSON.parse(pkgLocation);
  const city = cityLocattion && cityLocattion.name;
  const history = useHistory();
  const { title, titleId } = props;
  const dispatch = useDispatch();
  const renderToAllPackagesDetails = (data) => {
    const sub_category_name = title.replace(" ", "-");
    const name = data.heading;
    const packageName = name.replaceAll(" ", "_");
    const path = generatePath(
      "/experiences/:location/:sub_category_name/:sub_category_id/:package_name/:package_id",
      {
        sub_category_name: sub_category_name,
        location: cityLocattion.name,
        sub_category_id: titleId,
        package_name: packageName,
        package_id: data.id,
      }
    );

    history.push(path);
  };

  //  checking favourite package ;
  const wishtListArray = useSelector(
    (state) => state.handleWishtListData.wishListArray
  );

  const handleFavourite = (data, isFav) => {
    const access_token = localStorage.getItem("access_token");

    if (access_token) {
      const wishListUrl = endpoints.wishlist.updateWishList;
      const filterWishList = wishtListArray.filter((itm, indx) => {
        return itm.id !== data.id;
      });

      const selectedWishList = wishtListArray.filter((itm, ind) => {
        return itm.id == data.id;
      });

      const daata = {
        id: data.id,
        is_fav: isFav,
        image: data.img,
        price: data.price,
        title: data?.heading,
      };

      const wishLidta = [...filterWishList, daata];

      dispatch(updateWishList(wishLidta));

      const val = {
        package_id: data.id,
        model_type: "package",
        is_fav: isFav,
        user_type: data.is_supplierId || 1,
      };

      const headers = {
        Authorization: `Bearer ${access_token}`,
      };

      axios
        .post(wishListUrl, val, { headers: headers })
        .then((res) => {
          console.log(res, "add wishlist response");
          if (res.data.status) {
            dispatch(callWishListData());
          }
        })
        .catch((err) => {
          console.log(err, "this is the error ");
        });
    } else {
      toast("Please Login !", { type: "warning" });
    }
  };

  const checkWishList = wishtListArray.filter((itm, index) => {
    return itm.id === props.id;
  });

  const isFavourite = checkWishList[0];

  return (
    <>
      <div class="col-lg-3 col-md-6 col-6">
        <div class=" package-card-cont ALLpkgdedails-cont" key={props.key}>
          <div
            className="package-card ALLpkgdedails-card-pkg"
            onClick={() => renderToAllPackagesDetails(props)}
          >
            <div className="media-img coman-img ALLpkgdedails-card-img">
              {props.img ? (
                <img src={props.img} />
              ) : (
                <Skeleton height={250} variant="rectangular" />
              )}
            </div>
            <div className="details ALLpkgdedails-details">
              <h3>
                {props.heading ? props.heading : <Skeleton variant="text" />}
              </h3>
              <div className="rating-and-discount ALLpkgdedails-discount">
                <h5>
                  {props.discount && props.discount != 0 ? (
                    <span>{props.discount}% Off </span>
                  ) : (
                    ""
                  )}
                </h5>
                <div className="rating ALLpkgdedails-rating">
                  <AiFillLike />
                  {props.rating && props.rating != 0 ? (
                    <span>
                      {typeof props.rating == "string"
                        ? parseFloat(props.rating).toFixed(1)
                        : props.rating.toFixed(1)}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="price-and-btn ALLpkgdedails-price">
                <h4>
                  {props.discountPrice}

                  <s>₹{props.price}</s>
                </h4>
              </div>
            </div>
           
          </div>
          <div className="wishlist ">
              <span>
                {isFavourite?.is_fav == "true" ? (
                  <AiTwotoneHeart
                    onClick={() => handleFavourite(props, "false")}
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => handleFavourite(props, "true")}
                  />
                )}
              </span>
            </div>
        </div>

        {/* <div className="package-col">
          <div className="media-img  coman-img">
            {props.img ? (
              <img src={props.img} />
            ) : (
              <Skeleton height={250} variant="rectangular" />
            )}
            <div className="wishlist">
              <span>
                <AiOutlineHeart />
              </span>
            </div>
          </div>
          <div className="details">
            <h3>{props.heading}</h3>
            <div className="rating-and-discount">
              <h5>
                <span>{props.discount}%off </span>
              </h5>
              <div className="rating">
                <span>{props.rating}</span>
                <AiOutlineStar />
              </div>
            </div>
            <div className="price-and-btn">
              <h4>
                <span>₹</span>
                {props.discountPrice}
                <s>₹{props.price}</s>
              </h4>
              <button
                className="btn"
                onClick={() => renderToAllPackagesDetails(props)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

const AllPackagesDetails = (props) => {
  const history = useHistory();
  const { showListData, loading } = props;
  const location = useLocation();
  const packages = location.state;

  useEffect(() => {
    if (packages == undefined) {
      history.push("/");
    }
  }, []);

  const allHomePackages = packages?.homePackages;
  const homePkg = allHomePackages && JSON.parse(allHomePackages);

  return (
    <>
      {allHomePackages && (
        <div className="all-pack-slider inner-row-package allpkg-details-row">
          <div className="package-section-slider common-container allpkg-details-cont">
            <div className="container-fluid allpkg-details-fluid">
              <div className="title-with-button">
                <div className="row">
                  <div className="title-col allpkg-heding-col">
                    <h2>
                      <span>{homePkg.heading.replaceAll("-", " ")}</span>
                    </h2>
                  </div>
                </div>
              </div>

              {homePkg.content.length != 0 ? (
                <div className="row comman-card">
                  {homePkg.content.map((itmm, index) => {
                    return (
                      <>
                        <AllPackagesDetailsCard
                          img={itmm.image_id}
                          heading={itmm.title}
                          price={itmm.outlay_price}
                          discountPrice={itmm.discounted_price}
                          discount={itmm.discount_percnt}
                          key={index}
                          // review={item.review}
                          rating={itmm.rating}
                          id={itmm.id}
                          title={homePkg.heading}
                          titleId={0}
                        />
                      </>
                    );
                  })}
                </div>
              ) : (
                <h5
                  style={{
                    marginLeft: "40px",
                    color: "grey",
                    marginTop: "20px",
                  }}
                >
                  Sorry no package available !
                </h5>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AllPackagesDetails;
