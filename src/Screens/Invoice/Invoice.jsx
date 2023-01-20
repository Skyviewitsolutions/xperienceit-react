import React, { useEffect } from "react";
import "./Invoice.css";
import Logo from "../Invoice/InvoiceImages/xit.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Invoice = () => {
const [invoiceData,setInvoiceData]=useState([]);
  const {booking_id} = useParams()

  useEffect(() => {


    const invoiceUrl = `http://admin.experienceit.in/api/invoice`;
    // console.log(invoiceUrl,"invoiceUrl")
    const val = {
      booking_id : booking_id
    }
    axios
      .post(invoiceUrl , val)
      .then((res) => {
        if(res.data.status === true) {
          var val = res.data.body;
          setInvoiceData(val)
        }
      })
      .catch((err) => {
        console.log(err, "invoice data not found");
      });
  }, []);


  return (
    <>
      <div className="Invoice">
        <div
          style={{
            width: "800px",
            margin: "auto",
            padding: "30px 20px 20px 30px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          {invoiceData.map((item,index)=>{
            return(
              <>
             
          <h1 className="invctxt">INVOICE</h1>
          <div className="invoice-address">
            <div className="invoice-logo">
              <img src={Logo} className="invoice-logo-img" />
            </div>
            <div className="invoice-content">
              <h6>Xperience It Events Pvt Ltd</h6>
              <p>Regd Off. 19/9, Pant Nagar</p>
              <p>Jangpura, South Delhi</p>
              <p>New Delhi, Delhi 110014</p>
              <p>India</p>
              <p>
                Mobile : <a href="tel:01241234568">+ 91-8920933486</a>
              </p>
              <p>
                <a
                  href="https://www.experienceit.in"
                  style={{ fontWeight: "500" }}
                >
                  www.xperienceit.in
                </a>
              </p>
            </div>
          </div>

          <table style={{ width: "100%", borderTop: "2px solid lightgray" }}>
            <tr>
              <td style={{ width: "50%" }}>
                <p
                  style={{
                    color: "gray",
                    fontSize: "22px",
                  }}
                >
                  BILL TO
                </p>
                <h2
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                 {item.first_name} {item.last_name}
                </h2>
                <span style={{ fontSize: "14px" }}>{item.phone}</span>
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                >
                 {item.email}
                </p>
              </td>
              <td style={{ width: "50%", paddingTop: "20px" }}>
                <table style={{ width: "100%" }}>
                  <tr
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: "5px",
                    }}
                  >
                    <td
                      style={{
                        display: "flex",

                        alignItems: "flex-end",
                        marginBottom: "5px",
                      }}
                    >
                      <h6
                        style={{
                          minWidth: "140px",
                          marginTop: "0px",
                          marginRight: "16px",
                          fontSize: "15px",
                          marginBottom: " 0px",
                          fontWeight: "bold",
                          textAlign: "right",
                        }}
                      >
                        Invoice Number :{" "}
                      </h6>
                      <p
                        style={{
                          color: "black",
                          fontSize: "15px",
                          marginTop: "0px",
                          minWidth: "140px",
                          marginBottom: "0px",
                          paddingTop: "0px",
                        }}
                      >
                      {item.booking_id}
                      </p>
                    </td>
                  </tr>
                  <tr
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: "5px",
                    }}
                  >
                    <td
                      style={{
                        display: "flex",
                        alignItems: "end",
                        marginBottom: "5px",
                      }}
                    >
                      <h6
                        style={{
                          minWidth: "140px",
                          marginTop: "0px",
                          marginRight: "16px",
                          fontSize: "15px",
                          marginBottom: "0px",
                          fontWeight: "bold",
                          textAlign: "right",
                        }}
                      >
                        Invoice Date :{" "}
                      </h6>
                      <p
                        style={{
                          color: "black",
                          fontSize: "15px",
                          marginTop: "0px",
                          minWidth: "140px",
                          marginBottom: "0px",
                          paddingTop: "0px",
                        }}
                      >
                      {item.booking_date}
                      </p>
                    </td>
                  </tr>
                  <tr
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: " 5px",
                    }}
                  >
                    <td
                      style={{
                        display: "flex",
                        alignItems: "end",
                        marginBottom: " 5px",
                      }}
                    >
                      <h6
                        style={{
                          minWidth: "140px",
                          marginRight: "16px",
                          marginTop: "0px",
                          fontSize: "15px",
                          marginBottom: "0px",
                          fontWeight: "bold",
                          textAlign: "right",
                        }}
                      >
                        Payment Due :
                      </h6>
                      <p
                        style={{
                          color: "black",
                          fontSize: "15px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          minWidth: "140px",
                          paddingTop: "0px",
                        }}
                      >
                       {item.booking_date}
                      </p>
                    </td>
                  </tr>
                  <tr
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: "5px",
                    }}
                  >
                    <td
                      style={{
                        display: "flex",
                        alignItems: "end",
                        marginBottom: "5px",
                      }}
                    >
                      <h6
                        style={{
                          minWidth: "140px",
                          marginRight: "16px",
                          marginTop: "0px",
                          fontSize: "15px",
                          marginBottom: "0px",
                          fontWeight: "bold",
                          textAlign: "right",
                        }}
                      >
                        Amount(INR) :
                      </h6>
                      <p
                        style={{
                          color: "black",
                          fontSize: "15px",
                          marginTop: "0px",
                          marginBottom: "0px",
                          minWidth: "140px",
                          paddingTop: "0px",
                        }}
                      >
                        ₹7,418.66
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table
            style={{
              width: "100%",
              borderSpacing: "0px",
              marginTop: "10px",
              borderBottom: "2px solid lightgray",
            }}
          >
            <tr
              style={{
                borderSpacing: "0px",
                backgroundColor: "#bf8c20",
                height: "35px",
              }}
            >
              <td>
                {" "}
                <p
                  style={{
                    color: "#fff",
                    margin: " auto",
                    textAlign: "left",
                    paddingLeft: "50px",
                    marginTop: "5px",
                    fontWeight: "600",
                  }}
                >
                  Items
                </p>{" "}
              </td>
              <td>
                <p
                  style={{
                    color: "#fff",
                    margin: " auto",
                    marginTop: "5px",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Quantity
                </p>
              </td>
              <td>
                <p
                  style={{
                    color: "#fff",
                    margin: " auto",
                    marginTop: "5px",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Price
                </p>
              </td>
              <td>
                <p
                  style={{
                    color: "#fff",
                    margin: " auto",
                    marginTop: "5px",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Amount
                </p>
              </td>
            </tr>
            <tr style={{ borderBottom: "3px solid lightgray" }}>
              <td>
                <h6
                  style={{
                    width: "140px",
                    fontSize: "14px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontWeight: " bold",
                    marginLeft: "14px",
                  }}
                >
                  Room Decoration
                </h6>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    paddingTop: "0px",

                    marginLeft: "13px",
                  }}
                >
                  Rose Petals, Balloons, Candles
                </p>
              </td>
              <td>
                {" "}
                <h6
                  style={{
                    marginTop: "0px",
                    textAlign: "center",
                    paddingTop: "0px",
                    fontSize: "14px",
                    marginBottom: "0px",
                    fontWeight: "bold",
                  }}
                >
                  1
                </h6>
              </td>
              <td>
                {" "}
                <p style={{ textAlign: "center" }}>₹4,000.00</p>
              </td>
              <td>
                {" "}
                <p style={{ textAlign: "center" }}>₹2,287.00</p>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <h6
                  style={{
                    paddingTop: "5px",
                    width: "140px",
                    fontSize: "14px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontWeight: "bold",
                    marginLeft: "14px",
                  }}
                >
                  Room Rent
                </h6>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    paddingTop: "0px",
                    marginLeft: "13px",
                  }}
                >
                  Stay at Hotel including Breakfast
                </p>
              </td>
              <td>
                {" "}
                <h6
                  style={{
                    marginTop: " 0px",
                    textAlign: "center",
                    paddingTop: "0px",
                    fontSize: "14px",
                    marginBottom: "0px",
                    fontWeight: "bold",
                  }}
                >
                  1
                </h6>
              </td>
              <td>
                <p style={{ textAlign: "center" }}>₹4,000.00</p>
              </td>
              <td>
                {" "}
                <p style={{ textAlign: "center" }}>₹2,287.00</p>
              </td>
            </tr>
          </table>

          <table
            style={{ width: "100%", paddingBottom: "40px", marginTop: "10px" }}
          >
            <tr style={{ display: "flex", justifyContent: "flex-end" }}>
              <td style={{ display: "flex", alignItems: "end" }}>
                <h6
                  style={{
                    width: "140px",
                    marginRight: " 16px",
                    fontSize: "15px",
                    marginTop: "0px",
                    marginBottom: " 0px",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  Subtotal :
                </h6>
                <p
                  style={{
                    color: "black",
                    fontSize: "15px",
                    marginTop: "0px",
                    minWidth: "90px",
                    marginBottom: " 0px",
                    paddingTop: "0px",
                  }}
                >
                  ₹6,287.00
                </p>
              </td>
            </tr>
            <tr style={{ display: "flex", justifyContent: "flex-end" }}>
              <td
                style={{
                  display: "flex",
                  alignItems: "end",
                  borderBottom: "1px solid grey",
                  paddingBottom: "10px",
                }}
              >
                <h6
                  style={{
                    width: "140px",
                    marginRight: " 16px",
                    fontSize: "15px",
                    marginTop: "0px",
                    marginBottom: " 0px",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  GST 18% :
                </h6>
                <p
                  style={{
                    color: "black",
                    fontSize: "15px",
                    marginTop: "0px",
                    minWidth: "90px",
                    marginBottom: " 0px",
                    paddingTop: "0px",
                  }}
                >
                  ₹1,131.66
                </p>
              </td>
            </tr>
            <tr style={{ display: "flex", justifyContent: "flex-end" }}>
              <td
                style={{
                  display: "flex",
                  alignItems: "end",
                  borderBottom: "2px solid grey",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <h6
                  style={{
                    width: "140px",
                    marginRight: " 16px",
                    fontSize: "15px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  Total :
                </h6>
                <p
                  style={{
                    color: "black",
                    fontSize: "15px",
                    marginTop: "0px",
                    minWidth: "90px",
                    marginBottom: " 0px",
                    paddingTop: "0px",
                  }}
                >
                  ₹7,418.66
                </p>
              </td>
            </tr>
            <tr style={{ display: "flex", justifyContent: "flex-end" }}>
              <td
                style={{
                  display: "flex",
                  alignItems: "end",
                  paddingTop: "10px",
                }}
              >
                <h6
                  style={{
                    marginRight: " 16px",
                    fontSize: "15px",
                    marginTop: "0px",
                    marginBottom: " 0px",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  Amount Due (INR) :
                </h6>
                <p
                  style={{
                    color: "black",
                    fontSize: "15px",
                    marginTop: "0px",
                    minWidth: "90px",
                    marginBottom: " 0px",
                    paddingTop: "0px",
                  }}
                >
                  ₹7,418.66
                </p>
              </td>
            </tr>
          </table>
          </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Invoice;
