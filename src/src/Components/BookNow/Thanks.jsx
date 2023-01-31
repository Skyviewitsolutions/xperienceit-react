import React from 'react'
import './Thanks.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {IoIosCheckmarkCircle} from "react-icons/io";
import { borderRadius } from '@mui/system';

const Thanks = (props) => {
  return (
    <>
    
     <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <div className='thanksWrpper'>
       
       
      <Modal.Header closeButton style={{borderTop:"10px solid #ff6684", borderRadius:"0px"}}>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <IoIosCheckmarkCircle />
        <h4>Thank You For Choosing Us</h4>
        <h6>Your booking has been confirmed</h6>
        <div style={{display:"flex", justifyContent:"space-between", borderBottom:"1px solid lightgray", width:"100%"}}>
            <p>Booking Id</p>
            <p>#898989</p>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", borderBottom:"1px solid lightgray", width:"100%"}}>
            <p>Date</p>
            <p>27-01-2023</p>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", borderBottom:"1px solid lightgray", width:"100%"}}>
        <p>Final Amount</p>
        <p>INR 2,999</p>
        </div>
      </Modal.Body>
      <Modal.Footer style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Button style={{padding:"10px 60px", backgroundColor:"#ff6684", border:"none", fontSize:"20px", fontWeight:"600"}} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </div>
    </Modal>
   
    </>
  )
}

export default Thanks