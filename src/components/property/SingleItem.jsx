import { useEffect, useContext } from "react";
import { CustomLink } from "../buttons/Buttons";
import { MyContext } from "../../context";
import { Buttons } from "../buttons/Buttons";

import Slider from "react-slick";
import GoogleMap from "../googleMap/GoogleMap";
import LastComponent from "../home/LastComponent";

const SingleItem = ({ data }) => {
  const context = useContext(MyContext);
  const handleShowMoreButton = context.handleShowMoreButton;
  const showMoreButtonIndex = context.state.showMoreButtonIndex;
  const resetShowMoreButtonIndex = context.resetShowMoreButtonIndex;
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    return () => {
      resetShowMoreButtonIndex();
    };
  }, [data]);

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

  const showSingleItem = () => {
    const feature = data.singleItem.feature;
    const amenity = data.singleItem.amenity;
    const unit = data.singleItem.unit;

    const grandLobby = data.singleItem.grandLobby;
    const blackLogo = data.logo.black;
    const banner = {
      backgroundImage: `url('${data.bannerImage}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    const showImages = (e) => {
      return e.image.map((item, index) => {
        return (
          <div>
            <img src={item} alt={`${e.title}-${index}`} key={index} />;
          </div>
        );
      });
    };

    const getBlackLogo = () => {
      return blackLogo ? blackLogo : null;
    };

    const getUnits = () => {
      return unit
        ? unit.type.map((item, index) => {
            return (
              <p key={item.name.split(" ").join("").toLowerCase() + item.name}>
                {item.name}
              </p>
            );
          })
        : null;
    };

    const getAmenities = () => {
      return amenity
        ? amenity.content.map((item) => {
            return <p>{item}</p>;
          })
        : null;
    };

    return data ? (
      <>
        <div style={{ ...banner }}>
          <div className="single-item-image-banner">
            <img src={data.logo.white} alt="logo-white" />
          </div>
        </div>

        <div className="single-item-container">
          <div className="single-item-section">
            <div className="single-item-heading">
              {/* <img src={getBlackLogo()} alt="property logo" /> */}
              <h1>{data.name}</h1>
              <p>{data.bannerAbout}</p>
              <p>{data.cardAddress}</p>
            </div>
          </div>
          <div className="single-item-section-container">
            <div className="single-item-details">
              <div className="details-section">
                <h5>LOCATION</h5>
                <p>{data.cardPrice}</p>
                <h5>PRICE RANGE</h5>
                <p>{`Php ${parseInt(
                  data.priceMin
                ).toLocaleString()} - Php ${parseInt(
                  data.priceMax
                ).toLocaleString()}`}</p>
              </div>
              {/* <div className="details-section"></div> */}
              <div className="details-section">
                <h5>UNITS</h5>
                {getUnits()}
              </div>
              <div className="details-section">
                <h5>AMENITIES</h5>
                {getAmenities()}
              </div>
            </div>
          </div>

          <div className="single-item-section">
            <div className="gallery-container">
              <div className="gallery-button-container">
                <Buttons style="" onclick={``} text="AMENITY" name="amenity" />
                <Buttons
                  style=""
                  onclick={``}
                  text="LOBBY"
                  name="grand-lobby"
                />
                <Buttons style="" onclick={``} text="UNIT" name="model-unit" />
              </div>
              <div className="image-container">
                <div className="slider-container">
                  <Slider {...settings}>{showImages(grandLobby)}</Slider>
                </div>
                <div className="gallery-description">
                  <h4>Amenity</h4>
                  <p>{amenity.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="single-item-section-container">
            <div className="map-container">
              <div className="map-section">
                <div className="map box-shadow">
                  <GoogleMap mapURL={data.mapURL} />
                </div>
              </div>
              <div className="map-description">
                <img src={data.logo.white} alt="Logo-White" />
                <h3>Property Map</h3>
                <p>{`Explore Places Near ${data.name}`}</p>
              </div>
            </div>
          </div>

          <div className="single-item-section">
            <div className="feature-container">
              <div className="feature-description">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className="feature-image">
                <img src={data.cardImage} alt="feature-banner" />
              </div>
            </div>
          </div>

          <LastComponent />
        </div>
      </>
    ) : null;
  };

  return <>{showSingleItem()}</>;
};

export default SingleItem;
