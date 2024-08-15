import { useContext } from "react";
import { MyContext } from "../../context";
const Select = () => {
  const context = useContext(MyContext);
  const handleSelectOption = context.handleSelectOption;

  return (
    <>
      <div className="component">
        <form onSubmit={handleSelectOption}>
          <select name="propertyTypes" id="propertyTypes">
            <option value="pre-selling">Pre-Seliing</option>
            <option value="best-seller">best-seller</option>
          </select>
        </form>
      </div>
    </>
  );
};

export default Select;
