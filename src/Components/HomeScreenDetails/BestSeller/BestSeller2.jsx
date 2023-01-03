// This is the component where we are  create best seller part of the project ;

import React from "react";
import "./BestSeller2.css";
import DrinkCouple from "./BestSellerImages/drinkCouple.svg"

import Ballonhat from "./BestSellerImages/party.svg"
import BallonGirl from "./BestSellerImages/balloon_girl.png"


const BestSeller2 = () =>{

    
    return (<>
        <div className="main-seller-section">
            <div className="bestseller-section">
                <div className="bestseller_heading">
                    <h4>Our Best Seller</h4>
                </div>
                <div className="bestseller_container_area">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="seller_box1">
                                <img src={DrinkCouple} alt="" />
                                <button>Cangle light dinner</button>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6">
                            <div className="seller_box2">
                                <img src={BallonGirl} alt="balloon with girl" />
                                <div className="content_aria">
                                    <div>
                                    <h3>PARTY</h3>
                                    <h5>decoration</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="seller_box3">
                                <img src={Ballonhat} alt="ballon hat" />
                                <button>Balloon decorations</button>
                            </div>
                        </div>

                    
                    
                    
                    </div>
                </div>
            
            </div>
        </div>
    </>)
}

// exporting the part ;
export default BestSeller2;