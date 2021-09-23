import React, {useEffect, useState} from 'react';
import { NavbarContainer } from "../containers";
import Details from "../components/businessDetails";
import Footer from "../components/footer/index";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

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

  // state to hold business details of current business being looked at
  const [businessDetails, setBusinessDetails] = useState({});

  useEffect(() => {
    getBusinessDetails();
  })

  const getBusinessDetails = async () => {
    // let pathArray = window.location.pathname.split("/");
    // let storeName = pathArray[pathArray.length - 1];
    const details = (await db.collection('businesses').doc("Broadfork").get()).data();
    if (!details) {
      console.log('No such document!');
    } else {
      console.log('Document data:', details);
      setBusinessDetails(details);
    }
  }
  console.log(businessDetails)
  return (
    <>
      <NavbarContainer />
      <Details
        // name="Frankie and Jo's"
        // hours="1pm - 9pm"
        // phone="(206) 453-3135"
        // address="1411 NW 70th St, Seattle, WA 98117"
        // desc="Frankie & Jo’s is a plant-based ice cream shop whose mission is to radically shift the way you think about ice cream. We are steadfast and committed to making the most delicious and creative plant-based, gluten-free ice cream."
        cards={impact}
        data={businessDetails}
      />
      <Footer />
    </>
  );
}

export default DetailPage;
