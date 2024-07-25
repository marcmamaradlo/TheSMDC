import { useContext } from "react";
import { MyContext } from "../../context";

const BestSellingProperties = () => {
  const context = useContext(MyContext);
  const handleBestSellingProperties = context.handleBestSellingProperties;

  return (
    <>
      <div className="component">
        <h3>Best Selling Properties</h3>
        {handleBestSellingProperties()}
      </div>
    </>
  );
};

export default BestSellingProperties;
