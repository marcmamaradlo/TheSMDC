import { useEffect } from "react";

import StaticBanner from "../banner-carousel/StaticBanner";
import Category from "./Category";
import PropertyType from "./PropertyType";
import allProperties from "../../properties.json";
import Contact from "../contact/Contact";
const Properties = () => {
  console.log(allProperties.findIndex((item) => item.id === "prS42"));

  useEffect(() => {
    document.title = "Properties | The SMDC";
  }, []);

  return (
    <>
      <StaticBanner
        style={`page-banner`}
        text={`Helping you find the property of you dreams`}
      />
      <Category />
      <PropertyType />
      <Contact />
    </>
  );
};

export default Properties;
