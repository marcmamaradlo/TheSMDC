const Category = () => {
  return (
    <>
      <div className="component">
        <h4>
          Hello there! It's now your time to have your own property! Refine your
          search by categories.
        </h4>
        <div className="category">
          <div className="" name="condominium">
            <span className="material-symbols-outlined">apartment</span>
            Condo
          </div>
          <div className="" name="condominium">
            <span className="material-symbols-outlined">home</span>
            House and Lot
          </div>
          <div className="" name="condominium">
            <span className="material-symbols-outlined">variable_add</span>
            Lot
          </div>
          <div className="" name="condominium">
            <span className="material-symbols-outlined">home_work</span>
            Residential Office
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
