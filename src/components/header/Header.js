import React, { Component } from "react";
import header from "../../assets/images/header.png";
import onheader from "../../assets/images/onheader.png";
import "./Headercss.css";
class Header extends Component {
  render() {
    return (
      <>
        <div>
          <div className="container my-5 px-5">
            <div className="row">
              <div className="col-md-6">
                <div className="jumbotron">
                  <h1 className="display--4">
                    Search for Homes in your Neighborhood
                  </h1>
                  <p className="lead-4">
                    Online Estate Agency, the modern way to sell your own home.
                    You can use griffin residential to market your property.
                  </p>
                  <p className="lead-4">
                    <div className="d-flex">
                      <div>
                        <label className="form-label-4 ">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="587 Bridgeton Road"
                        />
                      </div>
                      <div>
                        <label className="form-label-4 ">City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="El Paso, Texas"
                        />
                      </div>
                      <div className="">
                        <label className="form-label-4">Search</label>
                        <button
                          style={{ fontSize: "18px" }}
                          type="button"
                          class="btn btn-sm btn-primary"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <img
                  style={{
                    position: "absolute",
                    right: "0vh",
                    top: "60vh",
                  }}
                  className="img-fluid"
                  src={onheader}
                  id="cardimg"
                />
                <img className="img-fluid" src={header} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
