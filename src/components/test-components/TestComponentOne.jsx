import propertiesJSON from "../../properties.json";
import ComponentOne from "./ComponentOne";
const TestComponentOne = () => {
  // const propertyType = propertiesJSON.filter(
  //   (obj) => obj.propertyType === "best-seller"
  // console.log(propertyType);
  // );

  // const propertyType = propertiesJSON.filter(
  //   (obj) => obj.city.toLowerCase() === "rizal"
  // );
  // console.log(propertyType);
  return (
    <>
      <ComponentOne data={propertiesJSON[0]} />
    </>
  );
};

export default TestComponentOne;
