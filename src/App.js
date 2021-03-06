import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Contactus from "./components/contactus/Contactus";
import Aboutus from "./components/aboutus/Aboutus";
import Home from "./components/home/Home";
import Crousel from "./components/crousel/Crousel";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <Crousel />
        <Home />
        <Aboutus />
        <Services />
        <Contactus />
        <Footer />
      </div>
    </>
  );
}

export default App;
