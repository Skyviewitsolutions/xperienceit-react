import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer2 from "../../Components/Common/Footer/Footer2";
import Navebar3 from "../../Components/Common/Navbar/Navebar3";
import Banner from "./cancellationpolicy.png";
import TaskBar from "../../Components/HomeScreenDetails/TaskBar/TaskBar";
import parse from "html-react-parser";
import './CancelationPolicy.css';

const CancelationPolicy = () => {
    const[cancelTitle,setCancelTitle]=useState("")
    const[cancelDesc,setCancelDesc]=useState("")
    useEffect(()=>{
   
    
   const cancelUrl='https://admin.experienceit.in/api/refund-cancellation-policy';
   
   axios
   .get(cancelUrl)
   .then((res)=>{
   
    if(res.data.status===true){
     const val=res.data.body[0].desc;
     setCancelTitle(res.data.body[0].title)
     setCancelDesc(val)
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
       
        <div className="cancellation-slide-image">
          <img src={Banner} />
        </div>
        <div className="row d-flex justify-content-center  cancellation-row">
          <div
            className="col-lg-9 col-md-12 col-12 rounded shadow  cancellation-box"
            style={{ background: "#f0f0f075" }}
          >
            <h5 className="text-center">{cancelTitle}</h5>
            <p> {cancelDesc && parse(cancelDesc)}  </p>
           


          </div>
        </div>

       
      </div>
      <Footer2 />
    </>
  )
}

export default CancelationPolicy;