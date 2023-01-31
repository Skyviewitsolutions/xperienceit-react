import React, { useState, useEffect } from "react";
import   "./Navbar2.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useHistory, generatePath } from "react-router-dom";
import { endpoints } from "../../../services/endpoints";
import {BsPersonCircle} from "react-icons/bs";
import {ImCancelCircle} from "react-icons/im";
import axios from "axios";
import { TbH5 } from "react-icons/tb";


const Navbar2 = (props) => {
 
  const { handleGifts } = props;

  const [taskBarData, setTaskBarData] = useState([]);

  const api = endpoints.home.filterCategory;

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

  const history = useHistory();

  
  const toRenderNextPackeges = (data) => {
  
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

  return (
    <>
    <div className="sidenavbar">
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="right_side_menu" >
          <div className="mobile-menu-containr" >
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            > <div className="mobileguest">
              <Offcanvas.Header>
              <ImCancelCircle className="mobileCancel"/>
                <Offcanvas.Title style={{display:"flex", alignItems:"center", paddingLeft:"40px"}}>
                 
                  <BsPersonCircle style={{color:"#ffff", fontSize:"40px"}}/>
                  <h5 style={{paddingLeft:"10px"}}>Hi, Guest</h5>
                  
                  </Offcanvas.Title>

                 {/* <div className="logIn">
                   <a
                      className="button"
                       type="button"
                       href="#"
                       data-toggle="modal"
                       data-target="#myModal"
                       onClick={() => setShowAuthPopup(true)}
                     >
                       <span>
                        <IoMdLogIn />
                       </span>{" "}
                       <span className="login-txt d-lg-block d-none"  onClick={() => setShowAuthPopup(true)}>Login</span>
                     </a>
                   </div>   */}
                   
              </Offcanvas.Header >
              
                  
              </div>
              <Offcanvas.Body >
              <div className="mobileNavAccount" >
                    {/* <div className="row mobileNavGlutters">
                      <div className="col-4 mobileMyAccount">
                       
                             <h5> MY ACCOUNT</h5>
                      </div>
                      <div className="col-4 mobileMyAccount">
                       
                      <h5>  TRACK ORDER</h5></div>
                      <div className="col-4 mobileMyAccount"> <h5>HELP CENTER</h5></div>
                    </div> */}
                    <ul> 
                      <li>MY ACCOUNT</li> 
                      <li>TRACK ORDER</li> 
                      <li>HELP CENTER</li> 
                      </ul>
                  </div> 
                <Nav className="justify-content-end flex-grow-1">
                  {/* <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
                  <Nav.Link onClick={() => handleGifts()}>Gifts</Nav.Link> */}

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
                                    {item?.child_category.map((child, ind) => {
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
                                    })}
                                  </>
                                );
                              })}
                          </NavDropdown>
                        </>
                      );
                    })}

                    {taskBarData.length == 0 && <span className="py-2 px-3 text-secondary">Sorry! no package found</span>}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
       </div>
    </>
  );
};

export default Navbar2;
