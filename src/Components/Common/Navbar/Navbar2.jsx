import React, { useState, useEffect } from "react";
import "./Navbar2.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useHistory, generatePath } from "react-router-dom";
import { endpoints } from "../../../services/endpoints";
import { BsPersonCircle } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { IoMdLogIn, IoIosCall } from "react-icons/io";
import axios from "axios";
import { TbH5 } from "react-icons/tb";
import $ from "jquery";
import User from "../../../assets/icons/user.png";
import { toast } from "react-toastify";
import AuthPopup from "../Authenication/AuthPopup";
import Profile from "../Profile/Profile";
import Location from "../ChooseLocation/Location";
import { HiClock } from "react-icons/hi";
import { HiClipboardCopy } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaSearch, FaUser } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import "./Navbar3.css";
const Navbar2 = (props) => {
  const { handleGifts } = props;
  const [taskBarData, setTaskBarData] = useState([]);
  const api = endpoints.home.filterCategory;
  const [show, setShow] = useState(false);
  const [authScreen, setAuthScreen] = useState("loginWithOtp");
  const [isHovering, setIsHovering] = useState(false);
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const accessToken = localStorage.getItem("access_token");
  const [userImg, setUserImg] = useState("");
  const [userName,setUserName]=useState("");
  useEffect(() => {
    const pkgLocation = localStorage.getItem("locationDetails");
    const cityLocattion = JSON.parse(pkgLocation);
    const cityID = cityLocattion && cityLocattion.id;

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      credentials: "same-origin",
    };

    if (cityID) {
      axios
        .post(api, { location_id: cityID, headers: headers })
        .then((res) => {
          if (res.data.status === true) {
            const val = res.data.body;
            //  setFilterCategoryData(val);
            setTaskBarData(val);
          }
        })
        .catch((err) => {
          console.log(err, "Filter Category api not response here...");
        });
    }
  }, [props.updateLocation]);

  const pkgLocation = localStorage.getItem("locationDetails");
  const cityLocattion = JSON.parse(pkgLocation);
  const cityID = cityLocattion && cityLocattion.id;
  const [userLogedIn, setUserLogedIn] = useState(false);
  const history = useHistory();

  const toRenderNextPackeges = (data) => {
    const accessToken = localStorage.getItem("access_token");
    const name = data.subcategory_nm;
    const subCategoryName = name.replaceAll(" ", "-");
    const path = generatePath(
      "/experiences/:location/subCategory/:subCategory_name/:subCategory_id",
      {
        subCategory_name: subCategoryName,
        location: cityLocattion.name,
        subCategory_id: data.subcategory_id,
      }
    );

    history.push(path, { allpackeges: data });
    window.location.reload();
  };

  document.addEventListener("click", () => {
    if (window.innerWidth > 992) {
      setIsHovering(false);
    }
  });

  const logOut = () => {
    localStorage.removeItem("access_token");
    setUserLogedIn(false);
    toast("Logout Successfully", { type: "success" });
    history.push("./");
    setAuthScreen("loginWithOtp");
  };
  // const handleSideBar = () => {
  //   setShowSideBar(true);
  // };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className="sidenavbar">
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="right_side_menu">
            <div className="mobile-menu-containr">
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                closeButton
              />

              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                closeButton
              >
                <div className="mobileguest">
                  <Offcanvas.Header closeButton>
                    <button
                      type="button"
                      closeButton
                      data-bs-dismiss="offcanvas"
                      className="mobileCancel"
                    ></button>

                    <Offcanvas.Title
                      style={{
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "40px",
                      }}
                    >
                      {accessToken ? (
                        <>
                          <img
                            className="side-bar-user"
                            src={userImg ? userImg : User}
                            alt="logo icon"
                          />
                          <h5
                            style={{ paddingLeft: "10px", marginTop: "10px" }}
                          >
                            Hi, {userName}
                          </h5>
                        </>
                      ) : (
                        <>
                          <BsPersonCircle
                            style={{ color: "#ffff", fontSize: "40px" }}
                          />

                          <h5
                            style={{ paddingLeft: "10px", marginTop: "10px" }}
                          >
                            Hi, Guest
                          </h5>
                        </>
                      )}
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                </div>

                <div className="mobileNavAccount">
                  {accessToken ? (
                    <div
                      className="myaccount-profile"
                      onMouseOver={() => setIsHovering(true)}
                      onClick={() => setIsHovering(!isHovering)}
                    >
                      <a href="" data-toggle="modal" data-target="#myModal">
                        {" "}
                        MY ACCOUNT{" "}
                      </a>
                      {isHovering === true && (
                        <div className="logout-nav2">
                          <div
                            className="user_profiles"
                            onClick={() => setShowProfile(true)}
                          >
                            <span style={{ fontWeight: "bold" }}>
                              <FaUser />
                            </span>
                            <span
                              style={{ marginLeft: "10px", fontWeight: "600" }}
                            >
                              Profile
                            </span>{" "}
                          </div>

                          <div
                            className="user_profiles"
                            onClick={() => history.push("/wishlist")}
                          >
                            <span style={{ fontWeight: "bold" }}>
                              <FaHeart />
                            </span>{" "}
                            <span
                              style={{ marginLeft: "10px", fontWeight: "600" }}
                            >
                              WishList
                            </span>{" "}
                          </div>
                          <div
                            className="user_profiles"
                            onClick={() => history.push("/upcoming-bookings")}
                          >
                            <span style={{ fontWeight: "bold" }}>
                              <HiClipboardCopy size={19} />
                            </span>{" "}
                            <span
                              style={{ marginLeft: "10px", fontWeight: "600" }}
                            >
                              Upcoming bookings
                            </span>{" "}
                          </div>
                          <div
                            className="user_profiles"
                            onClick={() => history.push("/past-bookings")}
                          >
                            <span style={{ fontWeight: "bold" }}>
                              <HiClock size={19} />
                            </span>{" "}
                            <span
                              style={{ marginLeft: "10px", fontWeight: "600" }}
                            >
                              Past bookings
                            </span>{" "}
                          </div>
                          <div className="user_profiles" onClick={logOut}>
                            <span style={{ fontWeight: "bold" }}>
                              <HiOutlineLogout size={19} />
                            </span>{" "}
                            <span
                              style={{ marginLeft: "10px", fontWeight: "600" }}
                              onClick={() => history.push("/")}
                            >
                              Logout
                            </span>{" "}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="nav-bar2-login">
                      <a
                        className="button side-bar-login"
                        type="button"
                        href="#"
                        data-toggle="modal"
                        data-target="#myModal"
                        onClick={() => setShowAuthPopup(true)}
                      >
                        <span>
                          <IoMdLogIn />
                        </span>{" "}
                        <span
                          className="login-txt"
                          onClick={() => setShowAuthPopup(true)}
                        >
                          Login
                        </span>
                      </a>
                    </div>
                  )}
                </div>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1">
                    {taskBarData &&
                      taskBarData.map((itm, index) => {
                        return (
                          <>
                            <NavDropdown
                              title={itm.name}
                              id={`offcanvasNavbarDropdown-expand-${expand}`}
                              closeButton
                            >
                              {itm &&
                                itm?.sub_category.map((item, index) => {
                                  return (
                                    <>
                                      {item?.child_category.map(
                                        (child, ind) => {
                                          return (
                                            <>
                                              <NavDropdown.Item
                                                onClick={() =>
                                                  toRenderNextPackeges(child)
                                                }
                                                key={ind}
                                              >
                                                {child.name}
                                              </NavDropdown.Item>
                                            </>
                                          );
                                        }
                                      )}
                                    </>
                                  );
                                })}
                            </NavDropdown>
                          </>
                        );
                      })}

                    {taskBarData.length == 0 && (
                      <span className="py-2 px-3 text-secondary">
                        Sorry! no package found
                      </span>
                    )}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Navbar>
        ))}
      </div>
      <AuthPopup
        showAuthPopup={showAuthPopup}
        setShowAuthPopup={setShowAuthPopup}
        userLogedIn={userLogedIn}
        setUserLogedIn={setUserLogedIn}
        authScreen={authScreen}
        setAuthScreen={setAuthScreen}
      />
      {/* <Location 
showLocation={showLocation}
setShowLocation={setShowLocation}
updateLocation={updateLocation}
setUpdateLocation={setUpdateLocation}
/> */}
      <Profile
        showProfile={showProfile}
        setShowProfile={setShowProfile}
        setUserImg={setUserImg}
        setUserName={setUserName}
      />
    </>
  );
};

export default Navbar2;
