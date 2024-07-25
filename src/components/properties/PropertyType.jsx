import { useContext } from "react";
import { MyContext } from "../../context";
import { CustomLink } from "../buttons/Buttons";

const PropertyType = () => {
  const context = useContext(MyContext);
  const premier = context.state.premier;
  const bestSelling = context.state.bestSelling;
  const rfo = context.state.rfo;
  const preSelling = context.state.preSelling;

  const mapOverJSONs = () => {
    const newObj = [
      { url: premier[0].cardImage, title: "Premier" },
      { url: bestSelling[0].cardImage, title: "Best Selling" },
      { url: rfo[0].cardImage, title: "Ready for Occupancy" },
      { url: preSelling[0].cardImage, title: "Pre-Selling" },
    ];

    return newObj.map((item, index) => {
      const bg = {
        backgroundImage: `url(${item.url})`,
        backgroundRepear: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "20rem",
        width: "49%",
      };

      return (
        <>
          <div key={item.title + index} style={bg}>
            <div className="property-icon-image">
              <p>{item.title}</p>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className="component">
        <h4>Don’t wait to buy real estate. Buy real estate and wait.</h4>
        <p>
          Embrace the power of real estate investment and seize the opportunity
          to secure your financial future by making the wise decision to buy
          real estate now, knowing that time will enhance its value and reward
          your patience.
        </p>
        <div className="property-type">{mapOverJSONs()}</div>
        <CustomLink
          text="view all properties"
          style="view-all-properties"
          linkTo={`/properties/view-all`}
        />
      </div>
    </>
  );
};

export default PropertyType;
