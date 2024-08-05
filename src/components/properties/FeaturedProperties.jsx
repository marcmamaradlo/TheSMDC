import propertiesJSON from "../../properties.json";
import Landscape from "../card/Landscape";

const FeaturedProperties = () => {
  const propertyType = propertiesJSON.filter(
    (obj) => obj.propertyType === "best-seller"
  );

  return (
    <>
      <div className="featured">
        <h3>Featured Properties</h3>
        <p>
          Find the best home for your lifestyle among our selection of premium
          residential condominiums.
        </p>
        <Landscape data={propertyType} />
      </div>
    </>
  );
};

export default FeaturedProperties;
