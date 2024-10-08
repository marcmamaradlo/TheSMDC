import { useParams } from "react-router-dom";
import propertiesJSON from "../../properties.json";
import SingleItem from "./SingleItem";

const RenderSingleItem = () => {
  const params = useParams();
  const propertyName = params.name.toLowerCase().split("-").join(" ");
  const property = propertiesJSON.filter(
    (item) => item.name.toLowerCase() === propertyName
  );

  return (
    <>
      <SingleItem data={property[0]} />
    </>
  );
};

export default RenderSingleItem;
