import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import { MyContext } from "../../context";

const ShowPropertyTypes = ({ pType }) => {
  const context = useContext(MyContext);
  const propertiesJSON = context.state.allProperties;

  const showItem = () => {
    const newArr = propertiesJSON.filter((obj) => obj.propertyType === pType);
    return newArr.map((item) => (
      <Link
        key={item.id}
        to={`../property/${item.name.toLowerCase().split(" ").join("-")}`}
      >
        <Card
          id={item.id}
          name={item.name}
          priceMax={parseInt(item.priceMax).toLocaleString()}
          priceMin={parseInt(item.priceMin).toLocaleString()}
          cardImage={item.cardImage}
          shortAddress={item.shortAddress}
        />
      </Link>
    ));
  };

  return (
    <>
      <div className="card-container">{showItem()}</div>
    </>
  );
};

export default ShowPropertyTypes;
