import { useEffect } from "react";
import { CustomLink } from "../buttons/Buttons";
import Contact from "../contact/Contact";
import ExploreLocation from "../property/ExploreLocation";
import ShowPropertyTypes from "../property/ShowPropertyTypes";
import HeadingOne from "../contact/HeadingOne";
import CategoryBuildingType from "../property/CategoryBuildingType";
import HeroImage from "./HeroImage";
import FeaturedProperty from "../features/FeaturedProperty";

const Home = () => {
  useEffect(() => {
    document.title = "The SMDC | Your Dream Home Awaits.";
  }, []);

  return (
    <>
      {/* <HomeCarousel /> */}
      {/* <div className="component">
        <Select />
      </div> */}
      {/* <DropDownMenu /> */}
      <HeroImage />
      <CategoryBuildingType />
      {/* <Category /> */}
      {/* <FeaturedProperties /> */}
      <ExploreLocation />
      {/* <div className="component">
        <h4>The leading developer in the Philippines.</h4>
        <p>
          If you are looking for an investment opportunity consider the SMDC.
          With properties still currently being built and still lined-up, the
          Philippines is still definitely enjoying the major surge of the Real
          Estate Market.
        </p>
        <AboutWidget />
      </div> */}
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
      <div className="component">
        <h3>SMDC</h3>
        <h4>The leading developer in the Philippines.</h4>
        <p className="text-justify">
          If you are looking for an investment opportunity consider the SMDC.
          With properties still currently being built and still lined-up, the
          Philippines is still definitely enjoying the major surge of the Real
          Estate Market.
        </p>
        <CustomLink
          text="view all properties"
          style="button-call-to-action"
          linkTo={`/properties`}
        />
        <CustomLink
          text="About Us"
          style="button-call-to-action"
          linkTo={`/about`}
        />
      </div>
    </>
  );
};

export default Home;
