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
