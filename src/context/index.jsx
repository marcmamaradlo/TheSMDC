import React, { Component } from "react";
import { Link } from "react-router-dom";

import premierJSON from "../premier.json";
import bestSellingJSON from "../best-sellers.json";
import rfoJSON from "../rfo.json";
import preSellingJSON from "../pre-selling.json";
import propertiesJSON from "../properties.json";
import Card from "../components/card/Card";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    test: true, // true, false
    contactModalIsActive: false, // true, false
    activeModal: "contactModal", //contactModal, homeModal, null
    locations: [
      "quezon city",
      "manila",
      "mandaluyong",
      "cavite",
      "makati",
      "paranaque",
      "muntinlupa",
      "pasay",
      "pasig",
      "batangas",
      "bulacan",
      "davao",
      "laguna",
      "rizal",
      "pampanga",
      "tagaytay",
      "iloilo",
      "taguig",
      "bacolod",
      "las pinas",
      "tarlac",
      "cagayan de oro",
    ],
    helpfulLinks: ["Home", "About Us", "How to Reserve", "Contact Us"],
    navLinks: ["home", "about", "properties", "reservation", "contact"],
    hamburgerIsActive: false,
    premier: premierJSON,
    bestSelling: bestSellingJSON,
    rfo: rfoJSON,
    preSelling: preSellingJSON,
    allProperties: propertiesJSON,
    showMoreButtonIndex: 4,
  };

  handleLocationLinks = () => {
    const locations = this.state.locations;
    return locations.map((item, index) => (
      <Link key={item + index}>{item.toUpperCase()}</Link>
    ));
  };

  resetShowMoreButtonIndex = () => {
    this.setState({ showMoreButtonIndex: 4 });
  };

  handleShowMoreButton = (e) => {
    this.setState({ showMoreButtonIndex: e });
  };

  handleContactModalState = () => {
    const contactModalIsActive = this.state.contactModalIsActive;
    this.setState({ contactModalIsActive: !contactModalIsActive });
  };

  handlePremierProperties = () => {
    ///////////////////////////////////////////////////////////
    // DO NOT USE THIS FUNCTION ///////////////////////////////
    ///////////////////////////////////////////////////////////
    const premierProperties = this.state.premier;
    return premierProperties.map((item) => {
      return (
        <Card
          id={item.id}
          name={item.name}
          cardPrice={item.cardPrice}
          cardImage={item.cardImage}
          cardAddress={item.cardAddress}
          cardDescription={item.cardDescription}
        />
      );
    });
  };

  handleBestSellingProperties = () => {
    ///////////////////////////////////////////////////////////
    // DO NOT USE THIS FUNCTION ///////////////////////////////
    ///////////////////////////////////////////////////////////
    const bestSellingProperties = this.state.bestSelling;
    return bestSellingProperties.map((item) => {
      return (
        <Card
          id={item.id}
          name={item.name}
          cardPrice={item.cardPrice}
          cardImage={item.cardImage}
          cardAddress={item.cardAddress}
          cardDescription={item.cardDescription}
        />
      );
    });
  };

  navbarLinks = () => {
    // map over navLinks to display in Navbar
    const handleHamburgerIcon = this.handleHamburgerIcon;
    return this.state.navLinks.map((item, index) => {
      const newItem = item.charAt(0).toUpperCase() + item.slice(1);
      return (
        <Link to={`/${item}`} onClick={handleHamburgerIcon} key={item + index}>
          {newItem}
        </Link>
      );
    });
  };

  handleHamburgerIcon = () => {
    // toggle hamburger icon
    const hamburgerIsActive = this.state.hamburgerIsActive;
    this.setState({ hamburgerIsActive: !hamburgerIsActive });
  };

  helpfulLinks = () => {
    // map over helpfulLinks to display in Footer
    return this.state.helpfulLinks.map((link, index) => {
      return (
        <li key={index}>
          <a href="/" key={link + index}>
            {link}
          </a>
        </li>
      );
    });
  };

  locationLinks = () => {
    // map over locations to display in Footer
    return this.state.locations.map((location, index) => {
      return (
        <li key={index}>
          <a href="/" key={location + index}>
            {location}
          </a>
        </li>
      );
    });
  };

  render() {
    const {
      state,
      helpfulLinks,
      locationLinks,
      handleHamburgerIcon,
      navbarLinks,
      handleBestSellingProperties,
      handleContactModalState,
      handleShowMoreButton,
      resetShowMoreButtonIndex,
      handleLocationLinks,
    } = this;

    return (
      <MyContext.Provider
        value={{
          state,
          helpfulLinks,
          locationLinks,
          handleHamburgerIcon,
          navbarLinks,
          handleBestSellingProperties,
          handleContactModalState,
          handleShowMoreButton,
          resetShowMoreButtonIndex,
          handleLocationLinks,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
