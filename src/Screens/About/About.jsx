import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Footer2 from "../../Components/Common/Footer/Footer2";
import Navebar3 from "../../Components/Common/Navbar/Navebar3";
// import TaskBar from "../../Components/HomeScreenDetails/TaskBar/TaskBar";
import parse from "html-react-parser";
import './about.css';
import Banner from "./aboutus.png";
import TaskBar from "../../Components/HomeScreenDetails/TaskBar/TaskBar";

const About = () => {
  const[abotDesc,setAboutDesc]=useState("")
 useEffect(()=>{

 
const aboutUrl='https://admin.experienceit.in/api/about-us';

axios
.get(aboutUrl)
.then((res)=>{

 if(res.data.status===true){
  const val=res.data.body[0].desc;
  setAboutDesc(val)
 }
})

 },[])

 useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, []);
  return (
    <>
     <Navebar3 />
        <TaskBar />
      <div className="container-fluid">
       
        <div className="about-us-slide-image">
          <img src={Banner} />
        </div>
        <div className="row d-flex justify-content-center  about-row">
          <div
            className="col-lg-9 col-md-12 col-12 rounded shadow about-main-box"
            style={{ background: "#f0f0f075" }}
          >
            <h5 className="text-center">About XperienceIt</h5>
            <p>  {abotDesc && parse(abotDesc)}</p>
            {/* <p className="content py-2">
              XperienceIt is making celebrations awesome since 2015! The idea
              stemmed from the fact that - We are so involved in our day to day
              lives that we forget to appreciate the moments that we work so
              hard for and the people who make it possbile!{" "}
            </p>
            <p className="font-weight-light font-italic text-center">
              The more you praise and celebrate your life, the more there is in
              life to celebrate
            </p> */}
            {/* <h5 className="text-center my-2">
              What is the XperienceIt vision ?
            </h5>
            <p className="font-weight-light font-italic text-center">
              Our vision is to spread smiles throughout the world
            </p>
            <p className="content py-2">
              Whether it's an anniversary, loved one's birthday, a baby shower,
              an office party or just a prank - These are all celebrations which
              need to be cherished and with this vision we continue providing
              new experiences, unique surprises, phenomenal customer service and
              an incredible execution so that we can spread more smiles in the
              world!
            </p> */}


          </div>
        </div>

      
      </div>
      <Footer2 />
    </>
  );
};

export default About;
