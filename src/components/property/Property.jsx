import { useState, useContext, useEffect } from "react";
import { MyContext } from "../../context";

import StaticBanner from "../banner-carousel/StaticBanner";
import Category from "./Category";
import HeadingOne from "../contact/HeadingOne";
import Contact from "../contact/Contact";
import Card from "../card/Card";
import ExploreLocation from "./ExploreLocation";

const Properties = () => {
  const context = useContext(MyContext);
  const scrollDocumentToTop = context.scrollDocumentToTop;
  const searchResult = context.state.searchResult;
  const renderSearchResult = context.renderSearchResult;
  const unMountRenderSearchResult = context.unMountRenderSearchResult;

  useEffect(() => {
    scrollDocumentToTop();
  }, []);

  return (
    <>
      {/* <StaticBanner
        style={`page-banner`}
        text={`Helping you find the property of you dreams`}
        page={`property`}
      /> */}
      <div className="component">
        {/* <h4>Here at SMDC</h4> */}
        <h3>We have the makings of your next dream home</h3>
        <h5></h5>
        <Category />
      </div>
      <ExploreLocation />
      <div className="component">
        <HeadingOne />
        <Contact />
      </div>
    </>
  );
};

export default Properties;
