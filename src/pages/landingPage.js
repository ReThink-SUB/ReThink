import React from "react";
import { LandingPageContainer, NavbarContainer } from "../containers";
import Footer from "../components/footer/index";
import Businesses from "../components/businesses/index";

export default function LandingPage() {
  return (
    <>
      <NavbarContainer />
      <LandingPageContainer />
      <Businesses />
      <Footer />
    </>
  );
}
