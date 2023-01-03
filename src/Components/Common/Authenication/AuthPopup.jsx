// In this file we will manage both the sign and register component ;

import React, { useState } from "react";
import "./Auth.css";
import { Modal } from "react-bootstrap";
import BackgroundImg from "./AuthImages/background.svg";
import Logo from "./AuthImages/Layer2.png";
import Login from "./Login";
import Register from "./Register";
import Cut from "./AuthImages/cut.svg";
import OtpPage from "./OtpPage";
import OtpPanel from "./OtpPanel";
import EmailPanel from "./EmailPanel";
import ForgatePassword from "./ForgatePassword";
import ChangePassword from "./ChangePassword";
import SignIn from "./SignIn";

const AuthPopup = (props) => {
  const { showAuthPopup, setShowAuthPopup, setUserLogedIn, userLogedIn,authScreen,setAuthScreen } =
    props;
  
  const [showLogin, setShowLogin] = useState(true);

  const [border, setBorder] = useState({
    login: "1.5px solid rgb(168, 161, 161 , 0.8)",
    register: "0px solid white",
  });

  const showLoginPage = () => {
    setShowLogin(true);
    setBorder({
      login: "1.5px solid rgb(168, 161, 161 , 0.8)",
      register: "0px solid white",
    });
  };

  const showRegisterPage = () => {
    setShowLogin(false);
    setBorder({
      login: "0px solid white",
      register: "1.5px solid rgb(168, 161, 161 , 0.8)",
    });
  };

  // here we are going to handle all the click events ;

  return (
    <>
      <Modal
        show={showAuthPopup}
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        centered
      >
        <div className="auth">
          <div className="auth_logoo">
            <img src={Logo} alt="logo icon" />
          </div>

          {authScreen === "otpScreen" && <OtpPanel setAuthScreen={setAuthScreen} setShowAuthPopup={setShowAuthPopup} setUserLogedIn={setUserLogedIn}/>}
          {authScreen === "register" && <Register setAuthScreen={setAuthScreen} setShowAuthPopup={setShowAuthPopup} setUserLogedIn={setUserLogedIn}/>}
          {authScreen === "emailPanel" && <EmailPanel />}
          {authScreen === "forgetPassword" && <ForgatePassword setAuthScreen={setAuthScreen}/>}
          {authScreen === "changePassword" && <ChangePassword setAuthScreen={setAuthScreen}/>}
          {authScreen === "loginWithOtp" && <OtpPage setAuthScreen={setAuthScreen} setShowAuthPopup={setShowAuthPopup} setUserLogedIn={setUserLogedIn}/>}
          {authScreen === "userDetails" && <SignIn setAuthScreen={setAuthScreen} setShowAuthPopup={setShowAuthPopup} setUserLogedIn={setUserLogedIn}/>}

          {authScreen === "login" && (
            <>
              <div className="auth_header">
                <div onClick={showLoginPage}>
                  <h4 style={{ borderBottom: border.login }}>Login</h4>
                </div>
                <div onClick={showRegisterPage}>
                  <h4 style={{ borderBottom: border.register }}>Register</h4>
                </div>
              </div>
              {showLogin ? (
                <Login  {...props} />
              ) : (
                <Register  setAuthScreen={setAuthScreen}/>
              )}
            </>
          )}

          <div className="auth_cut" onClick={() => setShowAuthPopup(false)}>
            <img src={Cut} alt="cut icon" />
          </div>
        </div>
      </Modal>
    </>
  );
};

// exporting the component ;
export default AuthPopup;
