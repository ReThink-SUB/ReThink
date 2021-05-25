import React from "react";
import { NavbarContainer } from "../containers";
import Criteria from "../containers/criteria";
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
