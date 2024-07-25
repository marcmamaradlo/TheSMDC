import StaticBanner from "../banner-carousel/StaticBanner";
import Category from "./Category";
import PropertyType from "./PropertyType";
import allProperties from "../../properties.json";
const Properties = () => {
  // console.log(allProperties);
  console.log(allProperties.findIndex((item) => item.id === "prS42"));

  return (
    <>
      <StaticBanner
        style={`page-banner`}
        text={`Helping you find the property of you dreams`}
      />
      <Category />
      <PropertyType />
    </>
  );
};

export default Properties;
