import bestSellerJSON from "../../best-sellers.json";
import largeImage from "../../assets/SMDCKeysToSuccess.png";
import SMDCWhiteBG from "../../assets/SMDCWhiteBG.png";
import SMDCAirBnBReady from "../../assets/SMDCAirBnBReady.png";
import propertiesJSON from "../../properties.json";

const About = () => {
  console.log(propertiesJSON);

  const bannerImage = {
    backgroundImage: `url(${bestSellerJSON[0].cardImage})`,
    backgroundRepear: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "20vh",
  };

  const kts = {
    backgroundImage: `url(${bestSellerJSON[2].gallery[2]})`,
    backgroundRepear: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "22rem",
  };

  const staycation = {
    backgroundImage: `url(${bestSellerJSON[2].gallery[3]})`,
    backgroundRepear: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "22rem",
  };

  return (
    <>
      <div style={{ ...bannerImage }}>
        <div className="about-page-banner">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="widget-container">
        <div className="widget">
          <p>78k+</p>
          <p>Delivered Units</p>
        </div>
        <div className="widget">
          <p>60+</p>
          <p>Developments</p>
        </div>
        <div className="widget">
          <p>24/7</p>
          <p>Customer Service</p>
        </div>
        <div className="widget">
          <p>100%</p>
          <p>Satisfaction</p>
        </div>
      </div>
      <div style={{ ...kts }}>
        <div className="SMDC-kts-container">
          <div className="SMDC-kts-header">
            <img src={SMDCWhiteBG} alt="SMDC Logo" />
            <h4>KEYS TO SUCCESS</h4>
          </div>
          <div className="SMDC-kts-body">
            <p>Properties should be in prime location</p>
            <p>Must be nearby the mall</p>
            <p>With hotel-like amenities</p>
            <p>With Professional Properties Management</p>
          </div>
        </div>
      </div>
      <div className="airport-container">
        <img src={bestSellerJSON[2].gallery[3]} alt="airport-img" />
        <div className="airport-text">
          <p>STAYCATION </p>
          <p>NEAR THE</p>
          <p>AIRPORT</p>
        </div>
      </div>
      <div className="component"></div>
      <div className="dyn-container">
        <div className="dyn-text">
          <p>Did you know that all</p>
          <div className="dyn-smdc-logo">
            <img src={SMDCWhiteBG} />
            <p>RFO projects are</p>
          </div>
          <div className="dyn-icon">
            <i className="fa-brands fa-airbnb"></i>
            <p>Airbnb ready?</p>
          </div>
        </div>
        <div className="dyn-img">
          <img src={bestSellerJSON[1].gallery[1]} alt="dyn-img01" />
          <img src={bestSellerJSON[1].gallery[5]} alt="dyn-img02" />
          <img src={bestSellerJSON[1].gallery[2]} alt="dyn-img03" />
        </div>
      </div>
      <div className="SMDC-Referrer component">
        <div className="SMDC-Referrer-header">
          <h2>BECOME AN SMDC REFERRER!</h2>
          <p>
            The SMDC Refer a Home Buyer Program gives you an opportunity to
            become an SMDC Referrer wherein you can earn additional income while
            helping your friends and family to find a new home. Use your
            influence to earn more and elevate your lifestyle with ease – all
            without the commitment of being a property specialist nor leaving
            the confines of your home.
          </p>
          <p>See potential earnings below.</p>
        </div>
        <div className="SMDC-Referrer-img">
          <div className="referrer-body">
            <div className="referrer-logo">
              <img src={propertiesJSON[50].logo.white} alt="Shore 3 Logo" />
              <div className="referrer-price">
                <p>EARN UP TO</p>
                <p>PHP 194,000</p>
              </div>
            </div>
            <div className="referrer-details">
              <p>Shore 3 Residences</p>
              <p>
                Taking inspiration from wharf-front lifestyle, Shore 3
                Residences' district personality makes it an undeniable marina
                haven
              </p>
              <p>Price Range: PHP 6.2M to 9.7M</p>
              <div className="referrer-location">
                <i className="fa-solid fa-location-dot"></i>
                <p>MALL OF ASIA, PASAY CITY</p>
              </div>
            </div>
          </div>
        </div>
        <div className="SMDC-Referrer-img">
          <div className="referrer-body">
            <div className="referrer-logo">
              <img src={propertiesJSON[35].logo.white} alt="Mint Logo" />
              <div className="referrer-price">
                <p>EARN UP TO</p>
                <p>PHP 174,000</p>
              </div>
            </div>
            <div className="referrer-details">
              <p>Mint Residences</p>
              <p>
                A nearby respite striking the perfecet balance between modern
                city convinience and a natural environment.
              </p>
              <p>Price Range: PHP 5.6M to 8.7M</p>
              <div className="referrer-location">
                <i className="fa-solid fa-location-dot"></i>
                <p>CHINO ROCES, MAKATI CITY</p>
              </div>
            </div>
          </div>
        </div>
        <div className="SMDC-Referrer-img">
          <div className="referrer-body">
            <div className="referrer-logo">
              <img src={propertiesJSON[31].logo.white} alt="Light 2 Logo" />
              <div className="referrer-price">
                <p>EARN UP TO</p>
                <p>PHP 144,000</p>
              </div>
            </div>
            <div className="referrer-details">
              <p>Light 2 Residences</p>
              <p>
                Spacious, Inviting, and throughtfully planned. A place that
                provides you with everything you need to create a beautiful home
                for you and your family.
              </p>
              <p>Price Range: PHP 5.6M to 7.2M</p>
              <div className="referrer-location">
                <i className="fa-solid fa-location-dot"></i>
                <p>EDSA-BONI MRT STATION</p>
              </div>
            </div>
          </div>
        </div>
        <div className="SMDC-Referrer-img">
          <div className="referrer-body">
            <div className="referrer-logo">
              <img src={propertiesJSON[16].logo.white} alt="Glam Logo" />
              <div className="referrer-price">
                <p>EARN UP TO</p>
                <p>PHP 196,000</p>
              </div>
            </div>
            <div className="referrer-details">
              <p>Glam Residences</p>
              <p>
                Envisioned as a complete, cosmopilitan home for success-driven
                singles, it is built for your utmost convinience and indulgence.
              </p>
              <p>Price Range: PHP 5.6M to 9.8M</p>
              <div className="referrer-location">
                <i className="fa-solid fa-location-dot"></i>
                <p>EDSA, QUEZON CITY</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          <i>*Prices are subject to change without prior notice.</i>
        </p>
      </div>
      {/* <img src={bestSellerJSON[1].gallery[1]} alt="airport-img" />
      <img src={bestSellerJSON[1].gallery[5]} alt="airport-img" />
      <img src={bestSellerJSON[1].gallery[2]} alt="airport-img" /> */}
    </>
  );
};

export default About;
