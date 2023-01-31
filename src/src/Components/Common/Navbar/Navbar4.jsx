import React from 'react'
import { useHistory } from 'react-router-dom';
import Logo from "./NavbarImages/Layer2.png";
import {ImWhatsapp} from "react-icons/im";
import {FiPhoneCall} from 'react-icons/fi';
import './Navbar4.css';
const Navbar4 = () => {
    const history=useHistory();
  return (
    <div className='navbar4Wrapper'>
   <div>
     <a className="navbar-brand" href="/">
                  <img
                    src={Logo}
                    alt="logo icon"
                    height={50}
                    width={50}
                    className="logo"
                    onClick={() => history.push("/")}
                    style={{zIndex : 1000}}
                  />
                </a>
   </div>

   <div className='navbar4right'>
<h6>Need Assistance?</h6>
<div className='navbar4Contact'>
    <ul>
        <li> 
        <a href="mailto:contact@experienceit.in">
            <ImWhatsapp/>Whatsapp
            </a></li>
        <li> 
        <a href="tel:7080581133">
            <FiPhoneCall/>Call
            </a></li>
    </ul>
</div>
   </div>
   </div>
  )
}

export default Navbar4