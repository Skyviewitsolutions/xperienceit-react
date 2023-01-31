import React, { useState,useEffect } from "react";
import BookNow from "../Components/BookNow/BookNow";
import Footer2 from "../Components/Common/Footer/Footer2";
// import Navbar2 from '../Components/Common/Navbar/Navbar2'
import Navbar4 from "../Components/Common/Navbar/Navbar4";
import StickyMenu from "../Components/Common/Navbar/StickyMenu";
import TaskBar from "../Components/HomeScreenDetails/TaskBar/TaskBar";

const BookingScreen = () => {
  
  const [updateLocation, setUpdateLocation] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <div className="BookingScreens">
        <Navbar4
          updateLocation={updateLocation}
          setUpdateLocation={setUpdateLocation}
        />
        {/* <TaskBar /> */}
        <BookNow />
        <Footer2 />
      </div>
      {/* <StickyMenu /> */}
    </div>
  );
};

export default BookingScreen;
