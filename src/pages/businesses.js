import React, { useEffect, useState } from "react";
import { BusinessesContainer, NavbarContainer } from "../containers";
import Footer from "../components/footer/index";

export default function Businesses() {
  return (
    <div>
      <NavbarContainer />
      <BusinessesContainer />
      <Footer />
    </div>
  );
}
