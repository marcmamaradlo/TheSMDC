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

  const bgImg = {
    backgroundImage: `url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    scrollDocumentToTop();
  }, []);

  return (
    <>
      <div className="banner-hero" style={bgImg}></div>
      <div className="component">
        {/* <h4>Here at SMDC</h4> */}
        <h3>We Have the Makings of Your Next Dream Home</h3>
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
