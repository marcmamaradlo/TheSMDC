import { useEffect } from "react";
import HomeCarousel from "../banner-carousel/HomeCarousel";
import Category from "../properties/Category";
import Contact from "../contact/Contact";
import { CustomLink } from "../buttons/Buttons";
import BestSellingProperties from "../properties/BestSellingProperties";

const Home = () => {
  useEffect(() => {
    document.title = "The SMDC | Your Dream Home Awaits.";
  }, []);

  return (
    <>
      <HomeCarousel />
      <Category />
      <Contact />
      <BestSellingProperties />
      <div className="component">
        <h4>Choose the SMDC, the leading developer in the Philippines.</h4>
        <p className="text-justify">
          If you are looking for an investment opportunity consider the SMDC.
          With properties still currently being built and still lined-up, the
          Philippines is still definitely enjoying the major surge of the Real
          Estate Market.
        </p>
        <CustomLink
          text="view all properties"
          style="view-all-properties"
          linkTo={`/properties`}
        />
        <CustomLink
          text="About Us"
          style="view-all-properties"
          linkTo={`/about`}
        />
      </div>
    </>
  );
};

export default Home;
