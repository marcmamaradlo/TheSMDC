import StaticBanner from "../banner-carousel/StaticBanner";
import Category from "./Category";
import HeadingOne from "../contact/HeadingOne";
import Contact from "../contact/Contact";

const Properties = () => {
  return (
    <>
      <StaticBanner
        style={`page-banner`}
        text={`Helping you find the property of you dreams`}
        page={`property`}
      />
      <Category />
      <div className="component">
        <HeadingOne />
        <Contact />
      </div>
    </>
  );
};

export default Properties;
