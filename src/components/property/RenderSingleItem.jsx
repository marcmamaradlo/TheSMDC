import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context";
import SingleItem from "./SingleItem";

const RenderSingleItem = () => {
  const context = useContext(MyContext);
  const allProperties = context.state.allProperties;
  const params = useParams();
  const propertyName = params.name.toLowerCase().split("-").join(" ");
  const property = allProperties.filter(
    (item) => item.name.toLowerCase() === propertyName
  );

  return (
    <>
      <SingleItem data={property[0]} />
    </>
  );
};

export default RenderSingleItem;
