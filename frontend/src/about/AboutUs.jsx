import React from "react";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <About />
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
