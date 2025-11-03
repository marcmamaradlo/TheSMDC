import { Link } from "react-router-dom";

import { useContext } from "react";
import { MyContext } from "../../context";

const CategoryBuildingType = () => {
  const context = useContext(MyContext);
  const allProperties = context.state.allProperties;

  const getPreSellingImageBackground = () => {
    const preSelling = allProperties[1];
    return preSelling.gallery[0];
  };

  const getRFOImageBackground = () => {
    const preSelling = allProperties[0];
    return preSelling.gallery[0];
  };

  const getFeaturedImageBackground = () => {
    const preSelling = allProperties[7];
    return preSelling.gallery[0];
  };

  return (
    <>
      <div className="component">
        {/* <h4>It's now your time to have your own property! </h4> */}
        <div className="category">
          <div className="category-section">
            <div className="category-section-image">
              <img src={getPreSellingImageBackground()} name="" alt="" />
            </div>
            <div className="category-section-content">
              <h5>Pre-Selling</h5>
              <p>
                Invest early in your dream home and enjoy premium discounts on
                our pre-selling properties. Take advantage of flexible payment
                terms and watch your investment grow as development progresses.
                Perfect for forward-thinking investors looking to secure prime
                locations at today's prices.
              </p>
              <Link to="../property/type/pre-selling">Learn More</Link>
            </div>
          </div>
          <div className="category-section">
            <div className="category-section-image">
              <img src={getRFOImageBackground()} name="" alt="" />
            </div>
            <div className="category-section-content">
              <h5>Ready for Occupancy</h5>
              <p>
                Move into your new home immediately with our ready-for-occupancy
                units. Experience resort-style living with fully-finished
                properties featuring modern amenities, 24/7 security, and
                strategic locations. Start living your dream lifestyle today.
              </p>
              <Link to="../property/type/rfo">Learn More</Link>
            </div>
          </div>
          <div className="category-section">
            <div className="category-section-image">
              <img src={getFeaturedImageBackground()} name="" alt="" />
            </div>
            <div className="category-section-content">
              <h5>Featured Properties</h5>
              <p>
                Discover our handpicked selection of premium properties in the
                most sought-after locations. From luxury condominiums to
                exclusive residential developments, these featured properties
                represent the best in modern living and investment potential.
              </p>
              <Link to="../property/type/featured">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBuildingType;
