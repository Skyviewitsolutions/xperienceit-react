import React, { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Banner2.css";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";

import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import Skeleton from "@mui/material/Skeleton";
import { generatePath, useHistory } from "react-router-dom";



const Card = (props) => {

  const { data } = props;
  const history = useHistory();

  const pkgLocation = localStorage.getItem("locationDetails");
  const cityLocattion = JSON.parse(pkgLocation);
  const cityID = cityLocattion && cityLocattion.id;

  const renderToOffer = (data) => {

    const name = data.offer_name;
    const offerName = name.replaceAll(' ', '_')

    const offerId = data.id;

    const path = generatePath("/experiences/offer/:location/:offerName/:offerId", {
      location: cityLocattion.id,
      offerName: offerName,
      offerId: offerId
    });

    history.push(path);
  };

  return (
    <>

      <div class='item' onClick={() => renderToOffer(data)}>
        <div className="package-col">
          <div className="media-img">
            <img src={props.img} alt="" />
          </div>
        </div>
      </div>



    </>
  );
};





const Banner2 = (props) => {

  const [data, setData] = useState([1, 2]);

  useEffect(() => {
    const api = endpoints.home.bannerOffers;

    axios
      .get(api)
      .then((res) => {
        // console.log(res, "banner response here");
        if (res.data.status === true) {
          const val = res.data.body;
          setData(val);
        }
      })
      .catch((err) => {
        console.log(err, "this is the error which we are getting here");
      });
  }, []);


  const options = {
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      400: {
        items: 1,
        margin: 10,
      },
      600: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2.5,

      }
    },
  };

  return (
    <>

      <div className="Offer-slider">
        <div className="offer-section-slider common-container">
          <div className="container-fluid">
          <h4>Offers for you</h4>
            <OwlCarousel className='owl-theme category' id='category' items={5} loop margin={10} dots={false} {...options} nav>
            {data.map((item, index) => {
            return (
              <>
              {item.image_id != "" && 
                <Card
                  img={item.image_id}
                  heading={item.offer_name}
                  price={item.amount}
                  discount={item.discount_type}
                  key={index}
                  data={item}
                />
              }
              </>
            );
          })}
        

              {/* <div class='item'>
                  <div className="package-col">
                    <div className="media-img">
                        <img src="https://admin.experienceit.in/uploads/0000/1/2022/11/08/birthday-decoration-600.png" alt="" />
                    </div>
                  </div>
                </div>


                <div class='item'>
                  <div className="package-col">
                    <div className="media-img">
                        <img src="https://admin.experienceit.in/uploads/0000/1/2022/11/08/birthday-decoration-600.png" alt="" />
                    </div>
                  </div>
                </div> */}



            </OwlCarousel>
          </div>
        </div>

      </div>

    </>
  )
}

export default Banner2;
