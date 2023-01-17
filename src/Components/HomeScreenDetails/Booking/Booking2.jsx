import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Booking2.css";
import $ from "jquery";
import { endpoints } from "../../../services/endpoints";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import { generatePath, useHistory } from "react-router-dom";
import Carousel from "react-elastic-carousel";

const Card = (props) => {
  const { data } = props;

  const history = useHistory();

  const pkgLocation = localStorage.getItem("locationDetails");
  const cityLocattion = JSON.parse(pkgLocation);
  const cityID = cityLocattion && cityLocattion.id;

  const renderToCategoryPage = (dta) => {
    console.log(dta, "data here");
    const name = dta.name;
    const categoryName = name.replaceAll(" ", "-");

    const path = generatePath(
      "/experiences/:location/category/:category_name/:category_id",
      {
        category_name: categoryName,
        location: cityLocattion.name,
        category_id: dta.id,
      }
    );

    history.push(path);
  };

  return (
    <>
      <div class="item">
        <div className="media-img" onClick={() => renderToCategoryPage(data)}>
          <img src={data.image_id} alt="" />
          <h4>{data.name}</h4>
        </div>
      </div>

      {/* <div
        className="carousel_item"
        data-aos="fade-up"
        onClick={() => renderToCategoryPage(data)}
      >
        <div className="carousel_item_box">
          <img src={data.image_id} alt="cake icon" />
        </div>
        <h4 className="bkName">{data.name}</h4>
      </div> */}
    </>
  );
};

const Booking2 = (props) => {

  const [filterCategoryData, setFilterCategoryData] = useState([]);
  const [item, setItem] = useState([1, 2, 3, 4, 5, ]);
  const [loading, setLoading] = useState(false);

  const api = endpoints.home.filterCategory;

  useEffect(() => {
    const pkgLocation = localStorage.getItem("locationDetails");
    const cityLocattion = JSON.parse(pkgLocation);
    const cityID = cityLocattion && cityLocattion.id;

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      credentials: "same-origin",
    };

    setLoading(true);

    if (cityID) {
      axios
        .post(api, { location_id: cityID, headers: headers })
        .then((res) => {
          setLoading(false);
          if (res.data.status === true) {
            const val = res.data.body;
            console.log(val, "booking category data here...");
            setFilterCategoryData(val);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "Filter Category api not response here...");
        });
    }
  }, [props.updateLocation]);

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    center: true,
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
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 7,
      },
    },
  };

  const breakPoints = [
    { width: 360,itemsToShow: 2 },
    { width: 500, itemsToShow: 2 },
    { width: 600, itemsToShow: 2 },
    {width:768,itemsToShow: 3},
    { width: 900, itemsToShow: 3 },
    { width: 1100, itemsToShow: 6 },
    { width: 1300, itemsToShow: 6 },
  ];

  return (
    <>

    {filterCategoryData.length != 0 && 
      <div className="category-section-slider common-container">
        <div className="container-fluid">
          <Carousel breakPoints={breakPoints} className="carousel_container">
            {filterCategoryData.length != 0 ? (
              filterCategoryData.map((itt, index) => {
                return (
                  <>
                    <Card key={index} data={itt} />
                  </>
                );
              })
            ) : (
              <>
                <div className="d-flex justify-content-around w-100  ">
                  {item.map((itm, ind) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems : "center",
                          }}
                          className="item"
                        >
                          <Skeleton
                            variant="circular"
                            width={120}
                            height={120}
                          />
                          <Skeleton variant="text" width={150} height={40} />
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            )}
          </Carousel>
        </div>
      </div>}
    </>
  );
};

export default Booking2;
