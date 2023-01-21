import React, { useEffect } from "react";
import "./Invoice2.css";
import Logo from "../Invoice/InvoiceImages/xit.png";
import Insta from "../Invoice/InvoiceImages/instagram.png";
import Facebook from "../Invoice/InvoiceImages/fb.png";
import Google from "../Invoice/InvoiceImages/googleicon.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Invoice2 = () => {
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
      <div className="container invoiceContainer">
     {invoiceData.map((item,index)=>{
        return(
            <>
            
            </>
        )
     })}   
        <div className="Invoice-box">
          <div className="row">
            <div className="col-sm-5">
              <div className="Invoice-Logo">
                <img src={Logo} className="Logo-Img" />
              </div>
              <div className="InvoceBill">
                <h6>Bill To :</h6>
                <p>Puneet Batra</p>
                <p>
                  Contact : <a href="tel:01241234568">8920933486</a>
                </p>
                <p>
                  Email : <a href="tel:01241234568">puneetbatra005@gmail.com</a>
                </p>
                <p>
                  Address : <a>Regd Off. 19/9, Pant Nagar</a>
                </p>
              </div>
            </div>
            <div className="col-sm-2">
              <h1 className="invoice-heading">INVOICE</h1>
            </div>
            <div className="col-sm-5">
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
                    style={{ fontWeight: "600" }}
                  >
                    www.xperienceit.in
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <div className="Invoice-PackageDetails">
                <h6>Xperience : Rose Petals, Balloons, Candles</h6>
                <p>Date : 23 Feb, 2023</p>
                <p>
                  Time : <span>8:00 am to 10:00 am</span>
                </p>
                <p>
                  Venue : <span>Regd Off. 19/9, Pant Nagar</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6"></div>
            <div className="col-sm-6">
              <div className="Invoice-Details">
                <li>
                  <p>Invoice No</p> : <span>5345466</span>
                </li>
                <li>
                  <p>Invoice Date</p> : <span>23 Feb, 2023</span>
                </li>
                <li>
                  <p>Payment Date</p> :<span>23 Feb, 2023</span>
                </li>
                <li>
                  <p>Amount Pay (INR)</p> : <span>17,700/-</span>
                </li>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="invoice-all-details">
              <table className="table invoice-table">
                <thead style={{ background: "#e39c07" }}>
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Items</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Rate</th>
                    <th>Dicount/Coupon</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Rose Petals, Balloons, Candles</td>
                    <td>1</td>
                    <td>15000/-</td>
                    <td></td>
                    <td>15000/-</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td>CGST 9%</td>
                    <td></td>

                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td>SGST 9%</td>
                    <td></td>

                    <td></td>
                  </tr>
                  <tr style={{ border: "1px solid white" }}>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td></td>

                    <td>Rs17070/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="invoice-social-content">
              <p>
                {" "}
                Web :{" "}
                <a href="https://experienceit.in/">https://experienceit.in/</a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="invoice-social-content-text">
              <li>
                <p>
                  Contact :-<span> +91 8920933486</span>
                </p>{" "}
                <span className="in-line">|</span>{" "}
                <p>
                  {" "}
                  Email :-<span> contact@experienceit.in</span>
                </p>
              </li>
            </div>
          </div>
          <div className="row">
            <div className="invoice-Social">
              <h6>Follow Us On :</h6>
              <li>
                <a
                  href="https://www.facebook.com/xperienceit.in
"
                >
                  <img src={Facebook} />
                </a>{" "}
                <a href="https://experienceit.in/">
                  <img src={Google} />
                </a>{" "}
                <a href="https://instagram.com/xperience.it?igshid=OGQ2MjdiOTE=">
                  <img src={Insta} />
                </a>
              </li>
            </div>
          </div>
          <div className="row">
            <div className="invoice-footer-text">
                <h6> This is digitaly created Invoice and is valid without Signature or Seal</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice2;
