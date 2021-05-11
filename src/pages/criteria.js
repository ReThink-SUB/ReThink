import React from "react";
import { NavbarContainer } from "../containers";
import Criteria from "../components/criteria";
import Footer from "../components/footer/index";

function CriteriaPage() {
  return (
    <>
      <NavbarContainer />
      <Criteria />
      <Footer />
    </>
  );
}

export default CriteriaPage;
