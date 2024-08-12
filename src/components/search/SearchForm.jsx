import { useContext, useEffect } from "react";
import { CustomLink } from "../buttons/Buttons";
import { MyContext } from "../../context";
import ExploreLocation from "../property/ExploreLocation";

const SearchForm = () => {
  const context = useContext(MyContext);
  const state = context.state;
  // const handlePropertyTypes = context.handlePropertyTypes;
  // const handlePropertySort = context.handlePropertySort;
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
      <div className="component">
        <div className="search">
          <h1>Find Your Dream Property</h1>
          <form onSubmit={handlePropertySearch}>
            <div>
              <input
                type="text"
                placeholder="Example: Jade, Bloom, Turf, Parkville"
                onChange={handlePropertySearchInput}
                onClick={handleClearInput}
                name={state.propertySearchInput}
              />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
        {renderSearchResult()}

        <h5>SORT BY:</h5>
        <div className="property-sort-items">
          {/* <Link className="active">Featured</Link>
            <Link className="notActive">Pre-Selling</Link>
            <Link className="notActive">Best-Selling</Link>
            <Link className="notActive">Premier</Link>
            <Link className="notActive">Ready for Occupancy</Link>
            <Link className="notActive">All Properties</Link>
            <Link className="notActive">Condominium</Link>
            <Link className="notActive">House and Lot</Link>
            <Link className="notActive">Residential Office</Link>
            <Link className="notActive">Lot</Link> */}
          {handleSortByItems()}
        </div>
      </div>

      <ExploreLocation />
    </>
  );
};

export default SearchForm;
