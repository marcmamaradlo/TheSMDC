import React from "react";
import Slider from "react-slick";
import { CustomLink } from "../buttons/Buttons";

const Landscape = ({ data }) => {
  // console.log(data);
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const showCardLandscape = () => {
    return data.map((item) => {
      const bodyBG = {
        backgroundImage: `url('${item.bannerImage}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backrgoundRepeat: "no-repeat",
        // Height: "200px",
        // Width: "300px",
      };
      // console.log(item.bannerImage);

      return (
        // <div>
        //   <img src={item.bannerImage} alt={item.name} />
        // </div>
        <div className="landscape" style={{ ...bodyBG }} key={item.id}>
          <div className="landscape-body">
            <img src={item.cardImage} alt={item.name} />
            <h4 className="text-shadow">{item.name}</h4>
            <div>
              <i className="fa-solid fa-location-dot"></i>
              <p className="text-shadow">{`${
                item.city.charAt(0).toUpperCase() + item.city.slice(1)
              } City`}</p>
            </div>
            <div>
              <i className="fa-solid fa-peso-sign"></i>
              <p>{`${item.priceMin} - ${item.priceMax}`}</p>
            </div>
            {/* <CustomLink text={`Learn More`} style={`featured-button`} /> */}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="slider-container">
      <div>
        <Slider {...settings}>{showCardLandscape()}</Slider>
      </div>
    </div>
  );
};

export default Landscape;
