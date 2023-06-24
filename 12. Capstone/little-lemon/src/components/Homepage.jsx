import React from "react";
import Nav from "./Nav/Nav";
import CallToAction from "./CallToAction/CallToAction";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";
import Chicago from "./Chicago/Chicago";
import Footer from "./Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Nav />
      <CallToAction />
      <Specials />
      <Testimonials />
      <Chicago />
      <Footer />
    </>
  );
};

export default Homepage;
