import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <>
        <div>
          <div className="container-fluid back-footer mt-4 p-4">
            <div className="row mt-5">
              <div className="col-lg-3 text-center">
                <div>
                  <p className="headings">Popular Searches</p>
                </div>
                <div>
                  <ul>
                    <li>Apartment for Rent</li>
                    <li>Apartment Low to hide</li>
                    <li>Offices for Buy</li>
                    <li>Offices for Rent</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 text-center">
                <div>
                  <p className="headings">About Us</p>
                </div>
                <div>
                  <ul>
                    <li>Our Story</li>
                    <li>Team Members</li>
                    <li>Careers</li>
                    <li>Contact Us </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 text-center">
                <div>
                  <p className="headings">Quick links</p>
                </div>
                <div>
                  <ul>
                    <li>Terms of Use </li>
                    <li>Privacy Policy</li>
                    <li>Contact Support</li>
                    <li>FAQs</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 text-center">
                <div>
                  <p className="headings">Support</p>
                </div>
                <div>
                  <ul>
                    <li>Help Center</li>
                    <li>Loan Support </li>
                    <li>Managment</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row my-5 px-5">
              <div className="col-lg-3 text-center">
                <img src={logo} />
              </div>
              <div className="col-lg-5"></div>
              <div className="col-lg-4">
                <p className="copyright mt-1">
                  © 2021 Besnik. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
