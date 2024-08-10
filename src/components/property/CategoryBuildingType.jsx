import { Link } from "react-router-dom";

const CategoryBuildingType = () => {
  return (
    <>
      <div className="component">
        <h4>It's now your time to have your own property! </h4>
        <div className="category">
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
        </div>
      </div>
    </>
  );
};

export default CategoryBuildingType;
