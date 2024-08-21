import { useContext } from "react";
import { MyContext } from "../../context";
import Slider from "react-slick";

const HeroImage = () => {
  const context = useContext(MyContext);
  const handleHomeHero = context.handleHomeHero;

  const settings = {
    dots: false,
    fade: true,
    arrows: false,
    autoplaySpeed: 1900,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    adaptiveHeight: true,
    draggable: true,
  };

  return (
    <>
      <div className="hero-container">
        <div className="hero-header">
          <h1>The Leading Developer in the Philippines</h1>
        </div>
        <div className="slider-container">
          <Slider {...settings}>{handleHomeHero()}</Slider>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
