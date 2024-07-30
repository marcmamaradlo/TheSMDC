import propertiesJSON from "../../properties.json";
import ComponentOne from "./ComponentOne";
const TestComponentOne = () => {
  return (
    <>
      <ComponentOne data={propertiesJSON[63]} />
    </>
  );
};

export default TestComponentOne;
