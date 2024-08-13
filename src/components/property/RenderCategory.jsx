import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context";
import { CustomLink } from "../buttons/Buttons";

const RenderCategory = () => {
  const context = useContext(MyContext);
  const params = useParams();
  const propertyCategory = context.propertyCategory;
  const propertyType = params.selector.split("-").join(" ");

  return (
    <>
      <div className="component">
        <h4>PROPERTY</h4>
        <h3>{propertyType.toUpperCase()}</h3>
        <div className="card-container">
          {propertyCategory(params.selector)}
        </div>
        <CustomLink
          text="More Properties"
          style="button-call-to-action"
          linkTo="/property"
        />
      </div>
    </>
  );
};

export default RenderCategory;
