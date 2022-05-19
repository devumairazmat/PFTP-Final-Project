import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Header />
        <Services />
        <Footer />
      </div>
    </>
  );
}

export default App;
