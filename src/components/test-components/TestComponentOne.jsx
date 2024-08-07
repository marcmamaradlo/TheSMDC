import propertiesJSON from "../../properties.json";
import propertyTestJSON from "../../propertyTest.json";
import ComponentOne from "./ComponentOne";
const TestComponentOne = () => {
  const propertyTest = propertyTestJSON.filter(
    (obj) => obj.id === "fparkville66"
  );
  console.log(propertyTest[0]);
  console.log(propertiesJSON);

  // const propertyType = propertiesJSON.filter(
  //   (obj) => obj.city.toLowerCase() === "rizal"
  // );
  // console.log(propertyType);
  return (
    <>
      {/* <ComponentOne data={propertyTest[0]} /> */}
      <ComponentOne data={propertiesJSON[44]} />
    </>
  );
};

export default TestComponentOne;
