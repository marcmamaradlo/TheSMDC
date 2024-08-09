import { useEffect, useState, useContext } from "react";
import SMDCWhiteBG from "../../assets/SMDCWhiteBG.png";
import { Buttons } from "../buttons/Buttons";
import { MyContext } from "../../context";

const SingleItem = ({ data }) => {
  const context = useContext(MyContext);
  const handleShowMoreButton = context.handleShowMoreButton;
  const showMoreButtonIndex = context.state.showMoreButtonIndex;
  const resetShowMoreButtonIndex = context.resetShowMoreButtonIndex;

  const feature = data.singleItem.feature;
  const amenity = data.singleItem.amenity;

  const unit = data.singleItem.unit;
  const grandLobby = data.singleItem.grandLobby;
  const blackLogo = data.logo.black;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    // console.log(data.singleItem.amenity.content);
    // console.log(data.singleItem.feature);
    // console.log(data.singleItem.unit);
    return () => {
      resetShowMoreButtonIndex();
    };
  }, []);

  const showSingleItem = () => {
    // const getBannerFeatures = () => {
    //   return data.bannerFeatures.map((item) => (
    //     <p key={item.split(" ").join("").toLowerCase()}>{item}</p>
    //   ));
    // };

    // const getBannerAmenities = () => {
    //   return data.bannerAmenities.map((item) => (
    //     <p key={item.split(" ").join("").toLowerCase()}>{item}</p>
    //   ));
    // };

    // const getBannerUnit = () => {
    //   return data.bannerUnit.map((item) => <p key={item}>{item}</p>);
    // };

    // const getImages = () => {
    //   return data.gallery
    //     .slice(0, showMoreButtonIndex)
    //     .map((item, index) => (
    //       <img
    //         src={item}
    //         alt={`image-gallery-${index}`}
    //         key={`image-gallery${index}`}
    //       />
    //     ));
    // };

    // const showMoreOnClick = () => {
    //   handleShowMoreButton(data.gallery.length);
    // };

    const banner = {
      backgroundImage: `url('${data.bannerImage}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "40rem",
      width: "100%",
    };
    return data ? (
      <>
        <div style={{ ...banner }}>
          <div className="single-item-image-banner">
            <img src={data.logo.white} alt="logo-white" />
          </div>
        </div>

        <div className="component">
          <h5>{data.name}</h5>
          <p>{data.cardPrice}</p>
          <p>{data.bannerAbout}</p>
          <p>{data.cardAddress}</p>
        </div>

        <div className="component">
          <h5>{feature.title}</h5>
          <p>{feature.description}</p>
          {/* <div className="card-s-unit-image-container"> */}
          {feature.image ? (
            <img src={feature.image} alt={feature.title} />
          ) : (
            <img src={blackLogo} alt={feature.title} />
          )}

          {/* </div> */}
        </div>
        {grandLobby.title ? (
          <div className="component">
            <h5>{grandLobby.title}</h5>
            <p>{grandLobby.description}</p>
            <div className="card-s-unit-image-container">
              {grandLobby.image
                ? grandLobby.image.map((item, index) => (
                    <img src={item} alt="Grand Lobby" key={index} />
                  ))
                : null}
            </div>
          </div>
        ) : null}

        <div className="component">
          <h5>{amenity.title}</h5>
          <p>{amenity.description}</p>
          {amenity.content.map((item, index) => (
            <p key={item + index}>{item}</p>
          ))}
          {amenity.image ? (
            <div className="card-s-unit-image-container">
              {amenity.image.map((item, index) => (
                <img
                  src={item}
                  alt={`amenity-image-${index}`}
                  key={`amenity-image-${index}`}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="component">
          <h5>{unit.title}</h5>
          <p>{unit.description}</p>
          {unit.type.map((item, index) => (
            <p key={item.name + index}>{item.name}</p>
          ))}
          {unit.image ? (
            <div className="card-s-unit-image-container">
              {data.singleItem.unit.image.map((item, index) => (
                <img
                  src={item}
                  alt={`unit-image-${index}`}
                  key={`unitImage${index}`}
                />
              ))}
            </div>
          ) : null}
        </div>

        {/* <div className="component card-s-container">
          <h1 className="card-s-name">{data.name}</h1>
          <p className="card-s-price">{data.cardPrice}</p>
          <p>{data.bannerAbout}</p>
          <img src={data.bannerGrandLobbyImage} alt="Grand Lobby" />
          <div className="card-s-address">
            <i className="fa-solid fa-location-dot"></i>
            <p>{data.cardAddress}</p>
          </div>
        </div> */}

        {/* <div className="card-s-details">
          <div className="component">
            <div className="card-s-container">
              <h5>{data.bannerFeaturesHeading}</h5>
              {getBannerFeatures()}
              <img src={data.bannerFeaturesImage} alt="Features" />
            </div>
          </div>
          <div className="component">
            <div className="card-s-container">
              <h5>{data.bannerAmenitiesHeading}</h5>
            </div>
            <p>{data.bannerUnitDescription}</p>
            <div className="card-s-amenities-image">
              <img src={data.bannerAmenitiesImage} alt="Amenities" />
            </div>
            {getBannerAmenities()}
          </div>
          <div className="component">
            <div className="card-s-container">
              <h5>{data.bannerUnitHeading}</h5>
              <p>{data.bannerUnitDescription}</p>
            </div>
            {getBannerUnit()}
          </div>
          <div className="component">
            <div className="card-s-container">
              <h5>Gallery</h5>
              <div className="card-s-unit-image-container">{getImages()}</div>
              {showMoreButtonIndex === 4 || data.gallery.length < 4 ? (
                <Buttons
                  text="Show More"
                  style="show-more"
                  onclick={showMoreOnClick}
                />
              ) : null}
            </div>
          </div>
        </div> */}

        <div className="card-s-logo-container">
          <img className="card-s-logo" src={SMDCWhiteBG} alt="SMDC White BG" />
          <img
            className="card-s-logo"
            src={data.logo ? data.logo.black : null}
            alt="Logo Black"
          />
        </div>
      </>
    ) : null;
  };

  return <>{showSingleItem()}</>;
};

export default SingleItem;
