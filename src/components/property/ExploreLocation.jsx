import { useContext, useState } from "react";
import { MyContext } from "../../context";

const ExploreLocation = () => {
  const context = useContext(MyContext);
  const handleLocationLinks = context.handleLocationLinks;
  const [isExpanded, setIsExpanded] = useState(false);

  const expandLocationLinks = () => {
    setIsExpanded(!isExpanded);
    // console.log(isExpanded);
  };
  return (
    <>
      <div className="location-container">
        <div className="location">
          <p>WHAT ARE YOU LOOKING FOR?</p>
          <h3>Explore properties near you</h3>
          <div>
            <p>SMDC IDEAL LOCATIONS</p>
            <i
              className="fa-solid fa-arrow-right"
              onClick={expandLocationLinks}
            ></i>
          </div>

          <div
            className={
              isExpanded ? "location-links-expanded" : "location-links"
            }
          >
            {handleLocationLinks()}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreLocation;
