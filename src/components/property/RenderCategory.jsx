import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context";

const RenderCategory = () => {
  const context = useContext(MyContext);
  const propertyCategory = context.propertyCategory;
  const params = useParams();
  const propertyType = params.selector.split("-").join(" ");
  console.log(propertyType);

  return (
    <>
      <div className="component">
        <h4>PROPERTY</h4>
        <h3>{propertyType.toUpperCase()}</h3>
        {propertyCategory(propertyType)}
      </div>
    </>
  );
};

export default RenderCategory;
