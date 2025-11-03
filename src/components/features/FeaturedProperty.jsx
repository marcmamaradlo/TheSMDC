import { useContext } from "react";
import { MyContext } from "../../context";
import { CustomLink } from "../buttons/Buttons";

const FeaturedProperty = () => {
  const context = useContext(MyContext);
  const featuredPropertyDetails = context.state.featuredPropertyDetails;
  const background = featuredPropertyDetails.gallery[6];
  const name = featuredPropertyDetails.name;
  const header =
    featuredPropertyDetails.singleItem.feature.description.split("!")[0];
  const headerTwo =
    featuredPropertyDetails.singleItem.feature.description.split("!")[1];
  const title = featuredPropertyDetails.singleItem.feature.title;

  const bgImg = {
    backgroundImage: `url('${background}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepear: "no-repeat",
  };

  return (
    <>
      <div className="featured-property" style={bgImg}>
        <div className="featured-content">
          <p>THE LATEST IN SMDC</p>
          <p>{name}</p>
          <h3>{title}</h3>
          <p>{headerTwo}</p>
          <CustomLink
            linkTo="/property/gold-residences"
            text="VISIT PROPERTY"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedProperty;
