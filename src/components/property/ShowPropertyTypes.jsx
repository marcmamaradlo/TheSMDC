import { Link } from "react-router-dom";
import propertiesJSON from "../../properties.json";
import Card from "../card/Card";

const ShowPropertyTypes = ({ pType }) => {
  const showItem = () => {
    const newArr = propertiesJSON.filter((obj) => obj.propertyType === pType);
    return newArr.map((item) => (
      <Link key={item.id}>
        <Card
          id={item.id}
          name={item.name}
          priceMax={item.priceMax}
          priceMin={item.priceMin}
          cardImage={item.cardImage}
          shortAddress={item.shortAddress}
        />
      </Link>
    ));
  };

  // const newArr = propertiesJSON.findIndex(
  //   (item) => item.propertyType.toLowerCase() === pType
  // );

  return (
    <>
      <div className="card-container">{showItem()}</div>
    </>
  );
};

export default ShowPropertyTypes;