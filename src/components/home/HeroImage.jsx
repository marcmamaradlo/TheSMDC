import { useContext } from "react";
import { MyContext } from "../../context";
import { CustomLink } from "../buttons/Buttons";

const HeroImage = () => {
  const context = useContext(MyContext);
  const heroImage = context.state.heroImage;
  const heroIcon = context.state.heroIcon;
  const heroBG = {
    backgroundImage: `url('${heroImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="hero-container">
        <div className="hero-header">
          <h1>The Leading Developer in the Philippines</h1>
        </div>
        <div className="hero-content" style={{ ...heroBG }}>
          <div className="hero-overlay">
            {/* <img className="hero-smdc-logo" src={SMDCNoGB} alt="" /> */}
            <img src={heroIcon} alt="Property Icon" />
            <CustomLink
              text="EXPLORE PROPERTIES"
              linkTo="/property"
              style="hero-button"
            />
          </div>
          <div className="hero-background-img"></div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
