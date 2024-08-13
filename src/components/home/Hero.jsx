import { useContext, useEffect } from "react";
import { MyContext } from "../../context";
import { CustomLink } from "../buttons/Buttons";

const Hero = () => {
  const context = useContext(MyContext);

  useEffect(() => {});

  return (
    <>
      <div className="hero-container">
        <div className="hero-image">
          <img src={context.state.heroImage} alt="Hero Card" />
        </div>
        <div className="hero-content">
          <h1>The leading developer in the Philippines.</h1>
          <form>
            <div className="hero-search-container">
              <input placeholder="Bloom Residences" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </form>
          <p>
            If you are looking for an investment opportunity consider the SMDC.
            With properties still currently being built and still lined-up, the
            Philippines is still definitely enjoying the major surge of the Real
            Estate Market.
          </p>
          <div className="hero-links">
            <CustomLink text="Properties" linkTo="/property" />
            <CustomLink text="About Us" linkTo="/about" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
