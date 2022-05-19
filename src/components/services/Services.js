import React, { Component } from "react";
import "./Servicescss.css";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
class Services extends Component {
  render() {
    return (
      <>
        <div>
          <div className="conatiner mt-4 mb-4 text-center " id="serv">
            <div className="row">
              <div className="heading-4 col">
                <h1>What Can We Help You Find?</h1>
                <h1>Services</h1>
              </div>
            </div>
          </div>
          <div className="container my-5 px-5">
            <div className="row text-center">
              <div className="col-lg-4 my-3">
                <div className="card" style={{ border: "none" }}>
                  <img
                    className="card-img-top"
                    src={icon1}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Buy a home</h5>
                    <p className="card-text">
                      With over 1 million+ homes for sale available on the
                      website, Trulia can match you with a house.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 my-3">
                <div className="card" style={{ border: "none" }}>
                  <img
                    className="card-img-top"
                    src={icon2}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Rent a home</h5>
                    <p className="card-text">
                      With 35+ filters and custom keyword search, Trulia can
                      help you find a home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 my-3">
                <div className="card" style={{ border: "none" }}>
                  <img
                    className="card-img-top"
                    src={icon3}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">See neighborhoods</h5>
                    <p className="card-text">
                      With more neighborhood insights than any other real estate
                      website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
