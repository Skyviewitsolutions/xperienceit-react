import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CategoriesPackeges from "../Components/CategoriesPackeges/CategoriesPackeges";
import "./screen.css";
import Footer2 from "../Components/Common/Footer/Footer2";

import Banner from "../Components/HomeScreenDetails/Banner/Banner";
import Booking from "../Components/HomeScreenDetails/Booking/Booking";
import Services2 from "../Components/HomeScreenDetails/Services/Services2";
import TaskBar from "../Components/HomeScreenDetails/TaskBar/TaskBar";
import Testimonial from "../Components/HomeScreenDetails/Testimonial/Testimonial";
import Navebar3 from "../Components/Common/Navbar/Navebar3";
import Banner2 from "../Components/HomeScreenDetails/Banner/Banner2";
import StickyMenu from "../Components/Common/Navbar/StickyMenu";

const CategoriesPackegesScreen = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [taskBarData, setTaskBarData] = useState([]);
  const [updateLocation, setUpdateLocation] = useState(false);
  const [showCategoryPack, setShowCategoryPack] = useState([]);
  const location = useLocation();

  const { category_name, category_id } = useParams();

  useEffect(() => {
    const api = `https://admin.experienceit.in/api/getPackageByCategory?package_parent_id=${category_id}`;
    axios
      .get(api)
      .then((res) => {
        // console.log(res,'Category Api  All Packages');
        if (res.data.status === true) {
          const val = res.data.body;
          setShowCategoryPack(val);
        }
      })
      .catch((err) => {
        console.log(err, "Category Api All Packages Failed");
      });
  }, [category_id]);

  return (
    <>
      <div className="Category_screen">
        {/* <Navbar2 /> */}
        <Navebar3
          updateLocation={updateLocation}
          setUpdateLocation={setUpdateLocation}
          showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
            taskBarData={taskBarData}
        />
        <TaskBar updateLocation={updateLocation} setTaskBarData={setTaskBarData} />
        <Booking  updateLocation={updateLocation}/>
        <CategoriesPackeges
          showCategoryPack={showCategoryPack}
          categoryName={category_name}
          category_id={category_id}
        />
        {/* <Banner /> */}
        <Banner2/>
        <Testimonial />
        <Services2/>
        <Footer2 />
      </div>
      <StickyMenu/>
    </>
  );
};

export default CategoriesPackegesScreen;
