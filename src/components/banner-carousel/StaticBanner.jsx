import premierJSON from "../../premier.json";
const StaticBanner = ({ style, text }) => {
  console.log();
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
