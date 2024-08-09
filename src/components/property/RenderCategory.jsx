import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context";

const RenderCategory = () => {
  const context = useContext(MyContext);
  const propertyCategory = context.propertyCategory;
  const params = useParams();
  const propertyType = params.selector.split("-").join(" ").toUpperCase();

  return (
    <>
      <div className="component">
        <h4>PROPERTY</h4>
        <h3>{propertyType}</h3>
        {propertyCategory(params.selector)}
      </div>
    </>
  );
};

export default RenderCategory;
