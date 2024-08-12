import { useEffect, useContext } from "react";
import { MyContext } from "../../context";
import { CustomLink } from "../buttons/Buttons";

import bestSellerJSON from "../../best-sellers.json";
import SMDCWhiteBG from "../../assets/SMDCWhiteBG.png";
import propertiesJSON from "../../properties.json";
import StaticBanner from "../banner-carousel/StaticBanner";
import AboutWidget from "./AboutWIdget";
import ShowPropertyTypes from "../properties/ShowPropertyTypes";

const About = () => {
  const context = useContext(MyContext);
  const universalBanner = context.universalBanner;
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | The SMDC";
  }, []);

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

  // const staycation = {
  //   backgroundImage: `url(${bestSellerJSON[2].gallery[3]})`,
  //   backgroundRepear: "no-repeat",
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   height: "22rem",
  // };

  return (
    <>
      <StaticBanner style={`page-banner`} text={`About Us`} />
      <AboutWidget />
      <div style={{ ...kts }}>
        <div className="SMDC-kts-container">
          <div className="SMDC-kts-header">
            <img src={SMDCWhiteBG} alt="SMDC Logo" />
            <h4 className="text-shadow">KEYS TO SUCCESS</h4>
          </div>
          <div className="SMDC-kts-body">
            <p className="text-shadow">
              Properties should be in prime location
            </p>
            <p className="text-shadow">Must be nearby the mall</p>
            <p className="text-shadow">With hotel-like amenities</p>
            <p className="text-shadow">
              With Professional Properties Management
            </p>
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
      {/* <div className="component"></div> */}
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
      <div className="long-text component">
        <h2>
          Discover the difference of working with a trusted real estate partner.
        </h2>
        <p>
          Welcome to SMDC, where we are passionate about providing exceptional
          real estate services to our valued clients. As a leading real estate
          company, we pride ourselves on our commitment to integrity,
          professionalism, and personalized attention.
        </p>
        <p>
          With years of industry experience, our team of dedicated experts
          possesses in-depth knowledge of the local market trends and a keen eye
          for identifying lucrative investment opportunities. We understand that
          buying or selling a property is a significant decision, and our
          mission is to guide you every step of the way, ensuring a smooth and
          rewarding experience.
        </p>
        <p>
          At SMDC, we prioritize building strong and lasting relationships with
          our clients. We take the time to listen to your unique needs,
          preferences, and goals, tailoring our approach to match your specific
          requirements. Our transparent and honest communication ensures that
          you are well-informed and empowered to make informed decisions.
        </p>
        <p>
          We leverage cutting-edge technology and innovative marketing
          strategies to maximize exposure for your property listing, ensuring
          that it reaches the widest audience of potential buyers. Whether
          you’re a first-time homebuyer, seasoned investor, or looking to sell
          your property, we have the expertise and resources to help you achieve
          your real estate objectives.
        </p>
        <p>
          Above all, we take pride in our unwavering commitment to delivering
          exceptional customer service. Our dedicated team is always available
          to address your inquiries, provide guidance, and go above and beyond
          to exceed your expectations.
        </p>
      </div>
      <div className="component">
        <h3>Featured Properties</h3>
        <ShowPropertyTypes pType={`featured`} />
        <CustomLink
          text="view all properties"
          style="button-call-to-action"
          linkTo={`/properties`}
        />
      </div>
    </>
  );
};

export default About;
