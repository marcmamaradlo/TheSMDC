import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    activeModal: true, //contactModal, homeModal, null
    locations: [
      "quezon",
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
    navLinks: ["home", "about", "property", "reservation", "contact"],
    propertySortitems: [
      { linkTo: "featured", name: "Featured" },
      { linkTo: "pre-selling", name: "Pre-Selling" },
      { linkTo: "best-seller", name: "Best-Selling" },
      { linkTo: "premier", name: "Premier" },
      { linkTo: "rfo", name: "Ready for Occupancy" },
      { linkTo: "all-properties", name: "All Properties" },
      { linkTo: "condominium", name: "Condominium" },
      { linkTo: "house-and-lot", name: "House and Lot" },
      { linkTo: "residential-office", name: "Residential-Office" },
      { linkTo: "lot", name: "Lot" },
    ],

    sortItemActive: "featured",
    hamburgerIsActive: false,
    premier: premierJSON,
    bestSelling: bestSellingJSON,
    rfo: rfoJSON,
    preSelling: preSellingJSON,
    allProperties: propertiesJSON,
    showMoreButtonIndex: 4,
    propertySearchInput: "",
    searchResult: "",
    heroImage: propertiesJSON[3].cardImage,
    heroIcon: propertiesJSON[3].logo.white,
    navbarActiveLink: "home",
    featuredPropertyDetails: propertiesJSON[42],
    galleryData: [],
    galleryButtons: [],
    galleryImage: [],
    galleryDescription: "",
    galleryTitle: "",
  };

  galleryDefaultState = () => {
    this.setState({
      galleryData: [],
      galleryButtons: [],
      galleryImage: [],
      galleryDescription: "",
      galleryTitle: "",
    });
  };

  getMainGalleryData = (data) => {
    this.setState({ galleryData: data });
    const amenity = data.singleItem.amenity;
    const grandLobby = data.singleItem.grandLobby;
    const unit = data.singleItem.unit;

    let newButtons = [];
    amenity.image.length > 0 ? newButtons.push("amenity") : null;
    grandLobby.image.length > 0 ? newButtons.push("lobby") : null;
    unit.image.length > 0 ? newButtons.push("unit") : null;

    this.setState({ galleryButtons: newButtons });
  };

  handleGalleryButtonClick = (e) => {
    const amenity = this.state.galleryData.singleItem.amenity;
    const grandLobby = this.state.galleryData.singleItem.grandLobby;
    const unit = this.state.galleryData.singleItem.unit;

    this.setState({ galleryTitle: e.target.name });

    e.target.name === "amenity"
      ? this.setState({
          galleryDescription: amenity.description,
          galleryImage: amenity.image,
        })
      : e.target.name === "lobby"
      ? this.setState({
          galleryDescription: grandLobby.description,
          galleryImage: grandLobby.image,
        })
      : e.target.name === "unit"
      ? this.setState({
          galleryDescription: unit.description,
          galleryImage: unit.image,
        })
      : null;
  };

  unMountRenderSearchResult = () => {
    this.setState({ searchResult: "" });
  };

  renderSearchResult = () => {
    const item = this.state.searchResult;
    // console.log(item);
    const newName = item ? item.name.split(" ").join("-") : null;
    return item ? (
      <Link to={`/property/${newName.toLowerCase()}`} key={item.id}>
        <Card
          id={item.id}
          name={item.name}
          priceMax={parseInt(item.priceMax).toLocaleString()}
          priceMin={parseInt(item.priceMin).toLocaleString()}
          cardImage={item.cardImage}
          shortAddress={item.shortAddress}
        />
      </Link>
    ) : null;
  };

  handleClearInput = (e) => {
    e.target.value = "";
  };

  handlePropertySearchInput = (e) => {
    this.setState({ propertySearchInput: e.target.value });
  };

  handlePropertySearch = (e) => {
    e.preventDefault();
    const propertySearchInput = this.state.propertySearchInput;
    const newName = propertySearchInput.split(" ")[0];
    console.log(newName);
    const newObj = propertiesJSON.filter(
      (item) =>
        item.name.toLowerCase() === `${newName.toLowerCase()} residences`
    );
    this.setState({ searchResult: newObj[0] });
  };

  renderPropertySearchResult = () => {};

  handleSortByItems = () => {
    const propertySortitems = this.state.propertySortitems;
    const sortItemActive = this.state.sortItemActive;
    return propertySortitems.map((item, index) => (
      <Link
        key={item.linkTo + index}
        name={item.linkTo}
        className="notActive"
        to={`/property/type/${item.linkTo}`}
      >
        {item.name}
      </Link>
    ));
  };

  propertyCategory = (e) => {
    // console.log(e);
    const getBuildingType = () => {
      const newObj = propertiesJSON.filter((obj) => obj.buildingType === e);
      // console.log(newObj);
      return newObj.map((item) => (
        <Link
          to={`/property/${item.name.split(" ").join("-").toLowerCase()}`}
          key={item.id}
        >
          <Card
            id={item.id}
            name={item.name}
            priceMax={parseInt(item.priceMax).toLocaleString()}
            priceMin={parseInt(item.priceMin).toLocaleString()}
            cardImage={item.cardImage}
            shortAddress={item.shortAddress}
          />
        </Link>
      ));
    };

    const getPropertyType = () => {
      const newObj = propertiesJSON.filter((obj) => obj.propertyType === e);
      // console.log(newObj);
      return newObj.map((item) => (
        <Link
          to={`/property/${item.name.split(" ").join("-").toLowerCase()}`}
          key={item.id}
        >
          <Card
            id={item.id}
            name={item.name}
            priceMax={parseInt(item.priceMax).toLocaleString()}
            priceMin={parseInt(item.priceMin).toLocaleString()}
            cardImage={item.cardImage}
            shortAddress={item.shortAddress}
          />
        </Link>
      ));
    };

    const getPropertyLocation = () => {
      const newObj = propertiesJSON.filter((obj) => obj.city === e);
      // console.log(newObj);
      return newObj.map((item) => (
        <Link
          to={`/property/${item.name.split(" ").join("-").toLowerCase()}`}
          key={item.id}
        >
          <Card
            id={item.id}
            name={item.name}
            priceMax={parseInt(item.priceMax).toLocaleString()}
            priceMin={parseInt(item.priceMin).toLocaleString()}
            cardImage={item.cardImage}
            shortAddress={item.shortAddress}
          />
        </Link>
      ));
    };

    if (
      e === "condominium" ||
      e === "house-and-lot" ||
      e === "lot" ||
      e === "residential-office"
    ) {
      // console.log(e);
      return getBuildingType();
    }
    if (
      e === "featured" ||
      e === "premier" ||
      e === "best-seller" ||
      e === "rfo" ||
      e === "pre-selling"
    ) {
      // console.log(e);
      return getPropertyType();
    } else {
      // console.log(e);
      return getPropertyLocation();
    }
  };

  handlePropertySort = () => {
    console.log("Property Sort Function");
  };

  handlePropertyTypes = () => {
    const newObj = [
      {
        url: this.state.premier[0].cardImage,
        title: "Premier",
        name: "premier",
      },
      {
        url: this.state.bestSelling[0].cardImage,
        title: "Best Selling",
        name: "best-seller",
      },
      {
        url: this.state.rfo[0].cardImage,
        title: "Ready for Occupancy",
        name: "rfo",
      },
      {
        url: this.state.preSelling[0].cardImage,
        title: "Pre-Selling",
        name: "pre-selling",
      },
    ];

    return newObj.map((item, index) => {
      const bg = {
        backgroundImage: `url(${item.url})`,
        backgroundRepear: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // height: "20rem",
        // width: "49%",
      };

      return (
        <Link to={`/property/type/${item.name}`} key={item.title + index}>
          <div style={bg}>
            <div className="property-icon-image">
              <p>{item.title}</p>
            </div>
          </div>
        </Link>
      );
    });
  };

  handleLocationLinks = () => {
    const locations = this.state.locations;
    return locations.map((item, index) => (
      <Link
        to={`/property/type/${item.split(" ").join("-")}`}
        key={item + index}
      >
        {item === "quezon" ? "QUEZON CITY" : item.toUpperCase()}
      </Link>
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
    const activeModal = this.state.activeModal;
    this.setState({
      contactModalIsActive: !contactModalIsActive,
      activeModal: !activeModal,
    });
  };

  handlePremierProperties = () => {
    ///////////////////////////////////////////////////////////
    // DO NOT USE THIS FUNCTION ///////////////////////////////
    ///////////////////////////////////////////////////////////
    const premierProperties = this.state.premier;
    return premierProperties.map((item) => {
      return (
        <Link key={item.id}>
          <Card
            id={item.id}
            name={item.name}
            priceMax={parseInt(item.priceMax).toLocaleString()}
            priceMin={parseInt(item.priceMin).toLocaleString()}
            cardImage={item.cardImage}
            shortAddress={item.shortAddress}
          />
        </Link>
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
          priceMax={parseInt(item.priceMax).toLocaleString()}
          priceMin={parseInt(item.priceMin).toLocaleString()}
          cardAddress={item.cardAddress}
          cardDescription={item.cardDescription}
        />
      );
    });
  };

  navbarLinks = () => {
    // map over navLinks to display in Navbar
    const handleHamburgerIcon = this.handleHamburgerIcon;
    const navbarActiveLink = this.state.navbarActiveLink;
    const urlName = document.URL.split("/")[3];
    return this.state.navLinks.map((item, index) => {
      const newItem = item.charAt(0).toUpperCase() + item.slice(1);
      return (
        <Link
          to={`/${item}`}
          onClick={handleHamburgerIcon}
          key={item + index}
          name={item}
          className={item === urlName ? "active-link" : "inActive-link"}
        >
          {newItem}
        </Link>
      );
    });
  };

  handleHamburgerIcon = (e) => {
    // toggle hamburger icon
    const hamburgerIsActive = this.state.hamburgerIsActive;
    this.setState({
      hamburgerIsActive: !hamburgerIsActive,
      navbarActiveLink: e.target.name,
    });
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

  modalEmailOnClick = () => {
    this.setState({
      contactModalIsActive: !this.state.contactModalIsActive,
      activeModal: !this.state.activeModal,
    });
  };

  scrollDocumentToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
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
      propertyCategory,
      handlePropertyTypes,
      handlePropertySort,
      handleSortByItems,
      handlePropertySearch,
      handlePropertySearchInput,
      handleClearInput,
      renderSearchResult,
      unMountRenderSearchResult,
      modalEmailOnClick,
      scrollDocumentToTop,
      getMainGalleryData,
      handleGalleryButtonClick,
      galleryDefaultState,
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
          propertyCategory,
          handlePropertyTypes,
          handlePropertySort,
          handleSortByItems,
          handlePropertySearch,
          handlePropertySearchInput,
          handleClearInput,
          renderSearchResult,
          unMountRenderSearchResult,
          modalEmailOnClick,
          scrollDocumentToTop,
          getMainGalleryData,
          handleGalleryButtonClick,
          galleryDefaultState,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
