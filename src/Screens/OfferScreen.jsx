import React, { useEffect, useState } from "react";
import Footer2 from "../Components/Common/Footer/Footer2";
// import Navbar2 from "../Components/Common/Navbar/Navbar2";
import Services2 from "../Components/HomeScreenDetails/Services/Services2";
import TaskBar from "../Components/HomeScreenDetails/TaskBar/TaskBar";
import Testimonial from "../Components/HomeScreenDetails/Testimonial/Testimonial";
import OfferPage from "../Components/Offer/OfferPage";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Navebar3 from "../Components/Common/Navbar/Navebar3";
import OfferPage2 from "../Components/Offer/OfferPage2";
import Testimonial2 from "../Components/HomeScreenDetails/Testimonial/Testimonial2";
import StickyMenu from "../Components/Common/Navbar/StickyMenu";


const OfferScreen = () => {

  const [showSideBar, setShowSideBar] = useState(false);
  const [taskBarData, setTaskBarData] = useState([]);
  const [offers, setOffers] = useState([]);
  const [updateLocation, setUpdateLocation] = useState(false);
  const location = useLocation();
  
  // const offerPackages = location.state.offerData;
  // const offerId = offerPackages.id;
  // const offerName = offerPackages.offer_name;

  const {offerName , offerId} = useParams();

  const api = `https://admin.experienceit.in/api/offers-by-package?offer_id=${offerId}`;

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        console.log(res,'Offers Api  All Packages')
        if (res.data.status === true) {
          const val = res.data.body[0].services;
          console.log(val,"ofersmjbdcmdcjb")
          setOffers(val);
        }
      })
      .catch((err) => {
        console.log(err, "offers Api  data not found");
      });
  }, [offerId]);

  return (
    <>
    <div className="OfferScreens">
      <Navebar3
        updateLocation={updateLocation}
        setUpdateLocation={setUpdateLocation}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        taskBarData={taskBarData}
      />
      <TaskBar updateLocation={updateLocation}   setTaskBarData={setTaskBarData}/>
      {/* <OfferPage
        offers={offers}
        offerName={offerName}
        offerId={offerId}
        updateLocation={updateLocation}
      /> */}
      <OfferPage2  offers={offers}
        offerName={offerName}
        offerId={offerId}
        updateLocation={updateLocation}/>
      {/* <Testimonial /> */}
      <Testimonial2/>
      <Services2 />
      <Footer2 />
      </div>
      <StickyMenu/>
    </>
  );
};
export default OfferScreen;
