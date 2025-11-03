import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CustomLink } from "../buttons/Buttons";
import { MyContext } from "../../context";
import ExploreLocation from "./ExploreLocation";

const Category = () => {
  const context = useContext(MyContext);
  const state = context.state;
  const handlePropertyTypes = context.handlePropertyTypes;
  const handlePropertySort = context.handlePropertySort;
  const handleSortByItems = context.handleSortByItems;
  const handlePropertySearch = context.handlePropertySearch;
  const handlePropertySearchInput = context.handlePropertySearchInput;
  const handleClearInput = context.handleClearInput;

  const searchResult = context.state.searchResult;
  const renderSearchResult = context.renderSearchResult;
  const unMountRenderSearchResult = context.unMountRenderSearchResult;

  useEffect(() => {
    return () => {
      unMountRenderSearchResult;
    };
  }, [searchResult]);

  return (
    <>
      <h4>Don’t wait to buy real estate. Buy real estate and wait.</h4>
      <p>
        Embrace the power of real estate investment and seize the opportunity to
        secure your financial future by making the wise decision to buy real
        estate now, knowing that time will enhance its value and reward your
        patience.
      </p>
      <div className="property-sort-container">
        <div className="property-sort">
          <form onSubmit={handlePropertySearch}>
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="SMDC Jade Residences"
                onChange={handlePropertySearchInput}
                onClick={handleClearInput}
                name={state.propertySearchInput}
              />
              <button type="submit">SEARCH</button>
            </div>
          </form>
        </div>
        {renderSearchResult()}
        <h5>SORT BY</h5>
        <div className="property-sort-items">{handleSortByItems()}</div>
      </div>
    </>
  );
};

export default Category;
