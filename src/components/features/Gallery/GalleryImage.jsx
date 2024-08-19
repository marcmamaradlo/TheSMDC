import { useContext } from "react";
import { MyContext } from "../../../context";
import Slider from "react-slick";

const GalleryImage = () => {
  const context = useContext(MyContext);
  const galleryImage = context.state.galleryImage;
  const galleryData = context.state.galleryData;
  const galleryButtons = context.state.galleryButtons;
  const galleryTitle = context.state.galleryTitle;
  const settings = {
    dots: false,
    fade: true,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    adaptiveHeight: true,
    draggable: true,
  };

  const showImages = (e) => {
    let textArr =
      galleryTitle === ""
        ? galleryButtons[0] === "amenity"
          ? galleryData.singleItem.amenity.image
          : galleryButtons[0] === "lobby"
          ? galleryData.singleItem.grandLobby.image
          : galleryButtons[0] === "unit"
          ? galleryData.singleItem.unit.image
          : null
        : galleryImage;
    // console.log(textArr);

    return textArr.map((item, index) => (
      <div key={item + index}>
        <img src={item} alt={item} />;
      </div>
    ));
  };

  return (
    <>
      <Slider {...settings}>{showImages()}</Slider>
    </>
  );
};

export default GalleryImage;
