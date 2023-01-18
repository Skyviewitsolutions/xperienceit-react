import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import './BookingDetails.css';
import './CancelModal.css';

import Close from "./BookingDetailsImages/close24.png";
import CancelNoModal from "./CancelNoModal";
const CancelModal = (props) => {
    const [modalOpen,setModalOpen]=useState(false);
    const {isOpen,setIsOpen} =props ;
  return (
    <>
      <Modal aria-labelledby="contained-modal-title-vcenter" size="lg" centered 
       show={isOpen}
      >
        <div className="cancelation-policy">
          <div className="Cancel-Policy-heading">
            {" "}
            <h4>Cancellation Reason</h4>
            <span className="cancel-cross"  onClick={()=>setIsOpen(false)}>
              <img src={Close} />
            </span>
          </div>
          <hr />
          <div className="cancel_input">
            <div className="cancel_policy_input_box">
              <input type="radio" name="trip" id="romantic" /> {" "}
              <label htmlFor="romantic" className="canceltext">
                To change password an OTP password has been sent to your
                register email address
              </label>
            </div>
          </div>

          <div className="cancel_input">
            <div className="cancel_policy_input_box">
              <input type="radio" name="trip" id="romantic" /> {" "}
              <label htmlFor="romantic" className="canceltext">
                To change password an OTP password has been sent to your
                register email address
              </label>
            </div>
          </div>

          <div className="cancel_input">
            <div className="cancel_policy_input_box">
              <input type="radio" name="trip" id="romantic" /> {" "}
              <label htmlFor="romantic" className="canceltext">
                To change password an OTP password has been sent to your
                register email address
              </label>
            </div>
          </div>

          <div className="cancel_input">
            <div className="cancel_policy_input_box">
              <input type="radio" name="trip" id="romantic" /> {" "}
              <label htmlFor="romantic" className="canceltext">
                To change password an OTP password has been sent to your
                register email address
              </label>
            </div>
          </div>

          <div className="cancel_input">
            <div className="cancel_policy_input_box">
              <input type="radio" name="trip" id="romantic" /> {" "}
              <label htmlFor="romantic" className="canceltext">
                To change password an OTP password has been sent to your
                register email address
              </label>
            </div>
          </div>
          <div className="cancel_input">
            <div className="cancel_policy_input_box">
              <input type="radio" name="trip" id="romantic" /> {" "}
              <label htmlFor="romantic" className="canceltext">
              Other Reason
              </label>
            </div>
            <div className="otherResionInput">
                <input type="text" className="writeResion"/>
            </div>
          </div>
          <div className="cancelbookingbuttons">
            <button className="noCancelation" onClick={()=>setIsOpen(false)} >No</button>
             <button className="YesCancelation" onClick={()=>setModalOpen(true)}>Yes, Cancel</button>
          </div>
        </div>
      </Modal>
     <CancelNoModal
     modalOpen={modalOpen}
     setModalOpen={setModalOpen}
     />
    </>
  );
};

export default CancelModal;
