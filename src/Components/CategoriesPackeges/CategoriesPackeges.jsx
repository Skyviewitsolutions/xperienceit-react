import React from "react";

import Star from "./star.svg";
import "./CategoriesPackeges.css";
import Skeleton from "@mui/material/Skeleton";
import { useHistory, generatePath } from "react-router-dom";

const CategoryCard = (props) => {
  
  const history = useHistory();
  const pkgLocation = localStorage.getItem("locationDetails");

  const cityLocattion = JSON.parse(pkgLocation);
  const city = cityLocattion && cityLocattion.name;

  const { categoryName, category_id } = props;

  const renderToDetailsPage = (data) => {
    const name = data.name;
    const subCategoryName = name.replaceAll(" ", "-");
    const path = generatePath(
      "/experiences/:location/:sub_category_name/:sub_category_id",
      {
        sub_category_name: subCategoryName,
        location: cityLocattion.name,
        sub_category_id: data.id,
      }
    );
    // history.push(`/product_screen/${city}?package=${props.heading.replaceAll('-',' ')}`, { packageId: props.id });
    history.push(path);
  };


  return (
    <>
      <div
        className="categoryCard"
        data-aos="flip-left"
        onClick={() => renderToDetailsPage(props)}
      >
        <div className="catg_img">
          {props.img ? (
            <img
              class="card-img-top"
              src={props.img}
              alt="Card image cap"
              height="250"
            />
          ) : (
            <Skeleton height={250} variant="rectangular" />
          )}
        </div>
        <div className="categoryCard_box">
          <div className="category_box_row1">
            <h6>{props.heading}</h6>
            <div className="category_box_row1_star">
              <span>{props.rating}</span>
              <img src={Star} alt="star icon" />
            </div>
          </div>
          <div className="category_box_row2">
            <li className="pink_text">
              <span> ₹</span>
              <h5>{props.prices}</h5>
            </li>
            <li className="text2">
              <span>₹</span>
              <h6>{props.outlayprice}</h6>
            </li>
            {/* <h6 className="text3">discount</h6> */}
          </div>
        </div>

        <button
          className="card_info_btn"
          onClick={() => renderToDetailsPage(props)}
        >
          Book Now
        </button>
      </div>
    </>
  );
};
const CategoriesPackeges = (props) => {
  const { showCategoryPack, categoryName, category_id } = props;

  return (
    <>
      <div className="categoryTaskbar">
        <h6>
          <span
            style={{
              color: "var(--pink)",
              marginLeft: "40px",
              fontSize: "20px",
            }}
          >
            Home/{" "}
          </span>
          {categoryName.replaceAll("-", " ")}
        </h6>

        {showCategoryPack.length != 0 ? (
          <div className="category_gifts">
            {showCategoryPack.map((item, index) => {
              return (
                <>
                  <CategoryCard
                    img={item.image_id}
                    heading={item.title}
                    prices={item.discounted_price}
                    outlayprice={item.outlay_price}
                    // discount={item.discount}
                    rating={item.rating}
                    // review={item.review}
                    key={index.key}
                    id={item.id}
                    data={item}
                  />
                </>
              );
            })}
          </div>
        ) : (
          <h5 style={{ marginLeft: "40px", color: "grey", marginTop: "20px" }}>
            Sorry no package available !
          </h5>
        )}
      </div>
    </>
  );
};

export default CategoriesPackeges;
