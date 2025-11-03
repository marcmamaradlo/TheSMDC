import { useEffect, useContext } from "react";
import { MyContext } from "../../context";

import GoogleMap from "../googleMap/GoogleMap";
import LastComponent from "../home/LastComponent";
import HeadingOne from "../contact/HeadingOne";
import Contact from "../contact/Contact";
import MainGallery from "../features/Gallery/MainGallery";

const SingleItem = ({ data }) => {
  const context = useContext(MyContext);
  const resetShowMoreButtonIndex = context.resetShowMoreButtonIndex;

  const showSingleItem = () => {
    const feature = data.singleItem.feature;
    const amenity = data.singleItem.amenity;
    const unit = data.singleItem.unit;
    const banner = {
      backgroundImage: `url('${data.bannerImage}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
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
        ? amenity.content.map((item, index) => {
            return <p key={item + index}>{item}</p>;
          })
        : null;
    };

    const getFeatureImage = () => {
      return feature.image ? feature.image[0] : null;
    };

    const getPrice = () => {
      const newPrice = data.cardPrice;
      return newPrice.map((item) => <p>{item}</p>);
    };

    // const getPriceRange = () => {
    //   const newPriceMax = parseInt(data.priceMax).toLocaleString();
    //   const newPriceMin = parseInt(data.priceMin).toLocaleString();
    //   return newPriceMin && newPriceMax === "NaN" ? null : (
    //     <>
    //       <h5>PRICE RANGE</h5>
    //       <p>{`Php ${newPriceMin} - Php ${newPriceMax}`}</p>
    //     </>
    //   );
    // };

    useEffect(() => {
      window.scrollTo(0, 0);
      document.title = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      return () => {
        resetShowMoreButtonIndex();
      };
    }, [data]);

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
              <h1>{data.name}</h1>
              <p>{data.bannerAbout}</p>
            </div>
          </div>
          <div className="single-item-section-container">
            <div className="single-item-details">
              <div className="details-section">
                <h5>LOCATION</h5>
                <p>{data.cardAddress}</p>

                {/* {getPriceRange()} */}
                <h5>UNIT PRICE</h5>
                {getPrice()}
              </div>
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

          <MainGallery data={data} />

          <div className="single-item-section-container">
            <div className="map-container">
              <div className="map-section">
                <div className="map box-shadow">
                  <GoogleMap mapURL={data.mapURL} />
                </div>
              </div>
              <div className="map-description">
                {data.logo.white ? (
                  <img src={data.logo.white} alt="Logo-White" />
                ) : null}
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
                {feature.image.length === 0 ? null : (
                  <img src={getFeatureImage()} alt="feature-banner" />
                )}
              </div>
            </div>
          </div>

          <div className="component">
            <HeadingOne />
            <Contact />
          </div>

          <LastComponent />
        </div>
      </>
    ) : null;
  };

  return <>{showSingleItem()}</>;
};

export default SingleItem;
