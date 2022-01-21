import React from "react";
import { NavbarContainer } from "../containers";
import Details from "../components/businessDetails";
import Footer from "../components/footer/index";

function DetailPage() {
  return (
    <>
      <NavbarContainer />
      <Details />
      <Footer />
    </>
  );
}

export default DetailPage;
