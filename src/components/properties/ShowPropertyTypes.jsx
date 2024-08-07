import propertiesJSON from "../../properties.json";
import Card from "../card/Card";

const ShowPropertyTypes = ({ pType }) => {
  const showItem = () => {
    const newArr = propertiesJSON.filter((obj) => obj.propertyType === pType);
    return newArr.map((item) => (
      <Card
        id={item.id}
        key={item.id}
        name={item.name}
        cardPrice={item.cardPrice}
        cardImage={item.cardImage}
        cardAddress={item.cardAddress}
        cardDescription={item.cardDescription}
      />
    ));
  };

  // const newArr = propertiesJSON.findIndex(
  //   (item) => item.propertyType.toLowerCase() === pType
  // );

  return <>{showItem()}</>;
};

export default ShowPropertyTypes;
