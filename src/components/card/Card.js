import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
class card extends Component {
  render() {
    return (
      <>
        <div>
          <div className="container mb-4">
            <div className="row"></div>
            <div className="col-12">
              <div
                className="cards  shadow-lg"
                style={{ maxHeight: "600px", maxWidth: "600px" }}
              >
                <div className="row ">
                  <div className="col-4 col-xs-4 ">
                    <img src={logo} className="card-img" alt="..." />
                  </div>
                  <div className="col-8 col-xs-8 ">
                    <div className="hotel-card_info m-1 ">
                      <div className="d-flex align-items-center">
                        <h6 className="mb-0 ">
                          Quarto Privado em T3 - Peniche
                        </h6>
                        <div className="m-1">
                          <img src={logo} alt="" />
                        </div>
                      </div>
                      {/* icon with images */}
                      <div className="amnities d-flex mb-2 mt-3">
                        <i className="fa-solid fa-user m-1"></i>
                        <span className="m-1" style={{ fontSize: "12px" }}>
                          2 Hóspedes
                        </span>
                        <i className="fa-solid fa-bed m-1"></i>
                        <span className="m-1" style={{ fontSize: "12px" }}>
                          1 Cama
                        </span>
                        <i className="fa-solid fa-tv m-1"></i>
                        <span className="m-1" style={{ fontSize: "12px" }}>
                          1 Quarto
                        </span>

                        <i className="fa-solid fa-toilet m-1"></i>
                        <span className="m-1" style={{ fontSize: "12px" }}>
                          1 Casa De Banho
                        </span>
                      </div>
                      <div
                        className="d-flex mb-1 mt-2"
                        style={{ fontSize: "12px" }}
                      >
                        <ul
                          id="classlist"
                          className="d-flex flex-row space-between"
                          style={{ gap: "20px" }}
                        >
                          <li>Wifi</li>
                          <li>Cozinha</li>
                          <li>Secretária</li>
                          <li>Varanda</li>
                        </ul>
                      </div>
                      <div className="row">
                        <div className="col-6 mt-4">
                          <button id="cardbtn">Favoritos</button>
                        </div>
                        <div className="col-6">
                          <div className="hotel-card_pricing text-center">
                            <h3 style={{ color: "#C48B60" }}>300€/mês</h3>
                            <div className="d-flex">
                              <p
                                style={{
                                  fontSize: "12px",
                                }}
                              >
                                Despesas incluídas
                              </p>
                              <i className="fa-solid fa-circle-info m-1"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default card;
