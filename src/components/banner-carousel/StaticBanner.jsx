import { useContext } from "react";
import { MyContext } from "../../context";

const StaticBanner = ({ style, text, page }) => {
  const context = useContext(MyContext);
  const premierJSON = context.premierJSON;

  const bannerImage = {
    backgroundImage: `url(${premierJSON[0].bannerImage})`,
    backgroundRepear: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "20vh",
  };

  return (
    <>
      <div style={{ ...bannerImage }}>
        <div className={style}>
          <h1>{text}</h1>
        </div>
      </div>
    </>
  );
};

export default StaticBanner;
