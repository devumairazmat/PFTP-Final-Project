import React, { Component } from "react";
import "./Contactuscss.css";
class Contactus extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-6  " id="form_container">
              <h2 className="heading-4">Contact Us</h2>
              <p className="heading-4">
                Please send your message below. We will get back to you at the
                earliest!
              </p>
              <form role="form" method="post" id="reused_form">
                <div className="row">
                  <div className="col-sm-12 form-group card-title-4">
                    <label for="message">Message:</label>
                    <textarea
                      className="form-control"
                      type="textarea"
                      id="message"
                      name="message"
                      maxlength="6000"
                      rows="7"
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-4 mb-4">
                  <div className="col-sm-6 form-group card-title-4">
                    <label for="name">Your Name:</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="col-sm-6 form-group card-title-4">
                    <label for="email">Email:</label>
                    <input
                      placeholder="Enter your email"
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 form-group">
                    <button
                      type="submit"
                      className="btn btn-lg btn-default pull-right btn-outline-primary mt-4"
                    >
                      Send →
                    </button>
                  </div>
                </div>
              </form>
              <div
                id="success_message"
                style={{ width: "100%", height: "100%", display: "none" }}
              >
                <h3>Posted your message successfully!</h3>
              </div>
              <div
                id="error_message"
                style={{ width: "100%", height: "100%", display: "none" }}
              >
                <h3>Error</h3>
                Sorry there was an error sending your form.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contactus;
