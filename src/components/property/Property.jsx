import { useState, useContext, useEffect } from "react";
import { MyContext } from "../../context";

import StaticBanner from "../banner-carousel/StaticBanner";
import Category from "./Category";
import HeadingOne from "../contact/HeadingOne";
import Contact from "../contact/Contact";
import Card from "../card/Card";

const Properties = () => {
  const context = useContext(MyContext);
  const searchResult = context.state.searchResult;
  const renderSearchResult = context.renderSearchResult;
  const unMountRenderSearchResult = context.unMountRenderSearchResult;

  return (
    <>
      {/* <StaticBanner
        style={`page-banner`}
        text={`Helping you find the property of you dreams`}
        page={`property`}
      /> */}
      <Category />
      <div className="component">
        <HeadingOne />
        <Contact />
      </div>
    </>
  );
};

export default Properties;
