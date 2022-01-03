import React from "react";
import { NavbarContainer } from "../containers";
import Details from "../components/businessDetails";
import Footer from "../components/footer/index";

function DetailPage() {
  let impact = new Map();
  let cats = [
    "Plant-based ingredients",
    "Compost packaging",
    "Green supply chain",
    "Low store footprint",
  ];
  let desc = [
    "Your business should incorporate all technology neccessary to use as less electricity as possible in your establishment. Lowering your energy consumption not only is sustainable, but also",
    "Your business should incorporate all technology neccessary to use as less electricity as possible in your establishment. Lowering your energy consumption not only is sustainable, but also",
    "Your business should incorporate all technology neccessary to use as less electricity as possible in your establishment. Lowering your energy consumption not only is sustainable, but also",
    "Your business should incorporate all technology neccessary to use as less electricity as possible in your establishment. Lowering your energy consumption not only is sustainable, but also",
  ];
  cats.forEach((cat, index) => {
    impact.set(cat, desc[index]);
  });

  return (
    <>
      <NavbarContainer />
      <Details cards={impact} />
      <Footer />
    </>
  );
}

export default DetailPage;
