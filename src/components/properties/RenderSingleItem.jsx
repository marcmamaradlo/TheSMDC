import { useContext } from "react";
import { useParams } from "react-router-dom";
import propertiesJSON from "../../properties.json";
import SingleItem from "./SingleItem";
import { MyContext } from "../../context";

const RenderSingleItem = () => {
  const context = useContext(MyContext);
  const allProperties = context.state.allProperties;
  const params = useParams();
  const propertyName = params.name.toLowerCase().split("-").join(" ");
  const propertyIndex = allProperties.findIndex(
    (item) => item.name.toLowerCase() === propertyName
  );

  return <>{<SingleItem data={allProperties[propertyIndex]} />}</>;
};

export default RenderSingleItem;
