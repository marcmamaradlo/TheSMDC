import { useContext } from "react";
import { MyContext } from "../../context";

const PremierProperties = () => {
  const context = useContext(MyContext);
  const handleBestSellingProperties = context.handleBestSellingProperties;
  return (
    <>
      <div className="component">
        <h3>Premier Properties</h3>
        {handleBestSellingProperties()}
      </div>
    </>
  );
};

export default PremierProperties;
