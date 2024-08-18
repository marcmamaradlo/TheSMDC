import { useEffect } from "react";

import Contact from "../contact/Contact";
import ExploreLocation from "../property/ExploreLocation";
import ShowPropertyTypes from "../property/ShowPropertyTypes";
import HeadingOne from "../contact/HeadingOne";
import CategoryBuildingType from "../property/CategoryBuildingType";
import HeroImage from "./HeroImage";
import FeaturedProperty from "../features/FeaturedProperty";
import LastComponent from "./LastComponent";

const Home = () => {
  useEffect(() => {
    document.title = "The SMDC | Your Dream Home Awaits.";
    console.log(localStorage);
  }, []);

  return (
    <>
      <HeroImage />
      <CategoryBuildingType />
      <ExploreLocation />
      <FeaturedProperty />
      <div className="component">
        <HeadingOne />
        <Contact />
      </div>
      <div className="component">
        <h3>Best Selling Properties</h3>
        <h4>CHECK OUT OUR BEST-SELLING PROPERTIES</h4>
        <ShowPropertyTypes pType={`best-seller`} />
      </div>
      <LastComponent />
    </>
  );
};

export default Home;
