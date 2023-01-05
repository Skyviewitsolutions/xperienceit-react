import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import "./upcoming.css";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import Skeleton from "@mui/material/Skeleton";

const UpcomingComp = (props) => {

  const { allBookings , getUpcomingBookingList } = props;

  const access_token = localStorage.getItem("access_token");
 
  const CancelOrder = (data) =>{
    const cancelUrl = "https://admin.experienceit.in/api/cancel-bookings";
    
    const headers = {
      "Authorization" :   `Bearer ${access_token}`,
      "Content-Type" : "application/json"
    }

    const val = {
      package_id : data.id ,
      status : 'cancelled'
    }

   axios.post(cancelUrl , val , {headers : headers})
   .then((res) =>{
    console.log(res , "this is the cancelResponse");
    if(res.data.status === true){
      toast("Booking cancelled Successfully" , {type : "Ssuccess"})
      getUpcomingBookingList();
    }else if(res.data.status === false){
      toast(res.data.message , {type : "error"})
    }
   })
   .catch((err) =>{
    console.log(err , "this is the eror")
   })
  }

  return (
<>
<div className="all-pack-slider inner-row-package">

<div className="package-section-slider common-container">
    <div className="container-fluid">
        <div className="title-with-button">
            <div className="row">
                <div className="title-col">
                    <h2 ><span> Upcomings Bookings</span></h2>

                </div>
            </div>
        </div>
      
        <div className='row comman-card'>
        {allBookings.length != 0 && allBookings.map((itm,ind) =>{
        
        return(<>
        <div class='col-lg-3 col-md-6 col-12'>
                <div className="package-col">
                    <div className="media-img  coman-img">
                        {itm.image_id ? <img src={itm.image_id} /> : <Skeleton height={250} variant="rectangular" />}
                        <div className="wishlist">
                            {/* <span><AiOutlineHeart /></span> */}
                        </div>
                    </div>
                    <div className="details">
                        <h3>{itm.title}</h3>
                        <div className="rating-and-discount">
                            <h5><span>{itm.discount_percent}% off </span></h5>
                            <div className="rating">
                                <span>{itm.rating}</span>
                                <AiOutlineStar />
                            </div>
                        </div>
                        <div className="price-and-btn">
                            <h4><span>₹</span>{itm.discounted_price}


                                <s>₹{itm.purchased_price}</s></h4>
                            <button className='btn' onClick={() => CancelOrder(itm)}>
                            Cancel
                            </button>
                        </div>
                        <div className="upcomingDte">
              <h6>Date</h6>
              <h6>:</h6>
              <h6>{itm.date}</h6>
            </div>
                    </div>
                </div>
            </div>
            </>)
      })}
      </div>
     
      {allBookings.length == 0 && <h6 style={{marginLeft : '25px'}}>Sorry , No data available</h6>}
    </div>
</div>



</div>



    {/* <div className="upcoming">
      <h6 style={{marginBottom : "14px"}}>
            <span
              style={{
                color: "var(--pink)",
                marginLeft: "30px",
                fontSize: "20px",
              }}
            >
             Upcomings Bookings
            </span>
          </h6>
      <div className="upcomingCont">
      {allBookings.length != 0 && allBookings.map((itm,ind) =>{
       
        return(<>
          <div className="allPkgcategoryCard">
        <div className="allPkgcatg_img" style={{ position: "relative" }}>
          <img class="card-img-top" src={itm.image_id} alt="Card image cap" />
        </div>
        <div className="allPkgcategoryCard_box">
          <div className="allPkgcategory_box_row1">
            <h6>{itm.title}</h6>
            
          </div>
          <div className="allPkgcategory_box_row2">
            <li className="pink_text">
              <span> ₹</span>
              <h5>{itm.discounted_price}</h5>
            </li>
            <li className="text2" style={{marginTop : "-12px"}}>
              <h6>₹{itm.purchased_price}</h6>
            </li>
          </div>
            <div className="upcomingDte">
              <h6>Date</h6>
              <h6>:</h6>
              <h6>{itm.date}</h6>
            </div>
        </div>

        <button
          className="allPkgcard_info_btn"
          onClick={() => CancelOrder(itm)}
        >
          Cancel
        </button>
      </div>
        </>)
      })}

      {allBookings.length == 0 && <h6 style={{marginLeft : '25px'}}>Sorry , No data available</h6>}
      </div>
    </div> */}
    </>
  );
};

export default UpcomingComp;
