import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Foter";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Carousel/>
      </div>
      <div className="m-3">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
