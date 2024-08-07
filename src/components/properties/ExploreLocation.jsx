import { useContext } from "react";
import { MyContext } from "../../context";

const ExploreLocation = () => {
  const context = useContext(MyContext);
  const handleLocationLinks = context.handleLocationLinks;

  return (
    <>
      <div className="location-container">
        <div className="location">
          <p>WHAT ARE YOU LOOKING FOR?</p>
          <h3>Explore properties near you</h3>
          <div>
            <p>SMDC IDEAL LOCATIONS</p>
            <i className="fa-solid fa-arrow-right"></i>
          </div>

          <div className="location-links">{handleLocationLinks()}</div>
        </div>
      </div>
    </>
  );
};

export default ExploreLocation;
