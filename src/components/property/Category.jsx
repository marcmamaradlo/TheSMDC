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
      <div className="component">
        <h3>SMDC Properties</h3>
        <h4>We have the makings of your next dream home</h4>
        {/* <h3>Refine your search</h3>
        <h4>It's now your time to have your own property! </h4> */}
        {/* <div className="category">
          <Link to="/property/type/condominium">
            <span className="material-symbols-outlined">apartment</span>
            <p>Condo</p>
          </Link>

          <Link to="/property/type/house-and-lot">
            <span className="material-symbols-outlined">home</span>
            House and Lot
          </Link>

          <Link to="/property/type/lot">
            <span className="material-symbols-outlined">variable_add</span>
            Lot
          </Link>

          <Link to="/property/type/residential-office">
            <span className="material-symbols-outlined">home_work</span>
            Residential Office
          </Link>
        </div> */}

        {/* <h4>Don’t wait to buy real estate. Buy real estate and wait.</h4>
        <p>
          Embrace the power of real estate investment and seize the opportunity
          to secure your financial future by making the wise decision to buy
          real estate now, knowing that time will enhance its value and reward
          your patience.
        </p> */}
        {/* <div className="property-type">{handlePropertyTypes()}</div> */}
        <div className="property-sort-container">
          {/* {handlePropertySort()} */}
          <h5>SEARCH</h5>
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
        {/* <CustomLink
          text="view all properties"
          style="view-all-properties"
          linkTo={`/properties/type/all-properties`}
          /> */}
      </div>
      <ExploreLocation />
    </>
  );
};

export default Category;
