import propertiesJSON from "../../properties.json";
import Landscape from "../card/Landscape";
import Featured from "./Featured";

const FeaturedProperties = () => {
  const propertyType = propertiesJSON.filter(
    (obj) => obj.propertyType === "featured"
  );

  return (
    <>
      <div className="featured">
        <h4 className="px-1rem ">PROPERTIES WE RECOMMEND</h4>
        <h3 className="px-1rem ">Featured Properties</h3>
        <p className="px-1rem ">
          Find the best home for your lifestyle among our selection of premium
          residential condominiums.
        </p>
        <Landscape data={propertyType} />
      </div>
      <Featured data={propertyType} />
    </>
  );
};

export default FeaturedProperties;
