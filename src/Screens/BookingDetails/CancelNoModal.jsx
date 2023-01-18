import React from "react";
import { Modal } from "react-bootstrap";
import Mask from "./BookingDetailsImages/MaskGroup240.png";

const CancelNoModal = (props) => {
  const { modalOpen, setModalOpen } = props;
  return (
    <div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
        show={modalOpen}
      >
        <div className="cancelation-policy-no">
          <div className="cancelationMask">
          <img src={Mask}  className="maskImages"/>
          </div>
        <div className="cancel-no-policy-text">
          <h4 className="cancelRequest">Cancel Request Submitted Succesfully</h4>
        <h6 className="connectTeam">Our team will call you in 24 hour</h6>
        </div>
      <div className="cancelOkButtons">
       <button className="CancelOk" onClick={()=>setModalOpen(false)} >OK</button>
       </div>
        </div>
      </Modal>
    </div>
  );
};

export default CancelNoModal;
