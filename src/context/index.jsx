import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CustomLink } from "../components/buttons/Buttons";
import Slider from "react-slick";

import featuredJSON from "../featured.json";
import premierJSON from "../premier.json";
import bestSellingJSON from "../best-sellers.json";
import rfoJSON from "../rfo.json";
import preSellingJSON from "../pre-selling.json";
import propertiesJSON from "../property.json";
import Card from "../components/card/Card";

export const MyContext = React.createContext();

export const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    test: true, // true, false
    contactModalIsActive: false, // true, false
    activeModal: false, //contactModal, homeModal, null
    locations: [
      "bacolod",
      "bulacan",
      "cavite",
      "davao",
      "laguna",
      "las pinas",
      "makati",
      "manila",
      "mandaluyong",
      "muntinlupa",
      "paranaque",
      "pasay",
      "pasig",
      "quezon",
      "tagaytay",
    ],
    helpfulLinks: [
      { title: "Home", link: "/" },
      { title: "About Us", link: "/about" },
      { title: "How to Reserve", link: "/reservation" },
      { title: "Contact Us", link: "/contact" },
    ],
    navLinks: ["home", "about", "property", "reservation", "contact"],
    propertySortitems: [
      { linkTo: "featured", name: "Featured" },
      { linkTo: "pre-selling", name: "Pre-Selling" },
      // { linkTo: "best-seller", name: "Best-Selling" },
      // { linkTo: "premier", name: "Premier" },
      { linkTo: "rfo", name: "Ready for Occupancy" },
      { linkTo: "all-properties", name: "All Properties" },
      // { linkTo: "condominium", name: "Condominium" },
      // { linkTo: "house-and-lot", name: "House and Lot" },
      // { linkTo: "residential-office", name: "Residential-Office" },
      // { linkTo: "lot", name: "Lot" },
    ],

    sortItemActive: "featured",
    hamburgerIsActive: false,
    premier: featuredJSON,
    bestSelling: featuredJSON,
    rfo: rfoJSON,
    preSelling: preSellingJSON,
    allProperties: propertiesJSON,
    showMoreButtonIndex: 4,
    propertySearchInput: "",
    searchResult: "",
    heroImage: propertiesJSON[3].cardImage,
    heroIcon: propertiesJSON[3].logo.white,
    navbarActiveLink: "home",
    featuredPropertyDetails: propertiesJSON[10],
    galleryData: [],
    galleryButtons: [],
    galleryImage: [],
    galleryDescription: "",
    galleryTitle: "",
    paginationCurrentPage: 1,
    paginationData: [],
    contactSpinnerActive: false, // true, false
  });

  const handleContactSpinner = (e) => {
    setState((prev) => ({ ...prev, contactSpinnerActive: e }));
    console.log(e);
  };

  const handleHomeHero = () => {
    return propertiesJSON.map((item, index) => {
      const heroBG = {
        backgroundImage: `url('${item.cardImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };

      const heroIcon = item.logo.white;
      return (
        <div key={item.id + index}>
          <div className="hero-content" style={{ ...heroBG }}>
            <div className="hero-overlay">
              <img src={heroIcon} alt="Property Icon" />
              <CustomLink
                text="EXPLORE PROPERTIES"
                linkTo={`/property/${item.name
                  .toLocaleLowerCase()
                  .split(" ")
                  .join("-")}`}
                style="hero-button"
              />
            </div>
            <div className="hero-background-img"></div>
          </div>
        </div>
      );
    });
  };

  const galleryDefaultState = () => {
    setState((prev) => ({
      ...prev,
      galleryData: [],
      galleryButtons: [],
      galleryImage: [],
      galleryDescription: "",
      galleryTitle: "",
    }));
  };

  const getMainGalleryData = (data) => {
    setState((prev) => ({ ...prev, galleryData: data }));
    const amenity = data.singleItem.amenity;
    const grandLobby = data.singleItem.grandLobby;
    const unit = data.singleItem.unit;

    let newButtons = [];
    amenity.image.length > 0 ? newButtons.push("amenity") : null;
    grandLobby.image.length > 0 ? newButtons.push("lobby") : null;
    unit.image.length > 0 ? newButtons.push("unit") : null;

    setState((prev) => ({ ...prev, galleryButtons: newButtons }));
  };

  const handleGalleryButtonClick = (e) => {
    const amenity = state.galleryData.singleItem.amenity;
    const grandLobby = state.galleryData.singleItem.grandLobby;
    const unit = state.galleryData.singleItem.unit;

    setState((prev) => ({ ...prev, galleryTitle: e.target.name }));

    if (e.target.name === "amenity") {
      setState((prev) => ({
        ...prev,
        galleryDescription: amenity.description,
        galleryImage: amenity.image,
      }));
    } else if (e.target.name === "lobby") {
      setState((prev) => ({
        ...prev,
        galleryDescription: grandLobby.description,
        galleryImage: grandLobby.image,
      }));
    } else if (e.target.name === "unit") {
      setState((prev) => ({
        ...prev,
        galleryDescription: unit.description,
        galleryImage: unit.image,
      }));
    }
  };

  const unMountRenderSearchResult = () => {
    setState((prev) => ({ ...prev, searchResult: "" }));
  };

  const renderSearchResult = () => {
    const item = state.searchResult;
    const newName = item ? item.name.split(" ").join("-") : null;
    return item ? (
      <Link to={`../property/${newName.toLowerCase()}`} key={item.id}>
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

  const handleClearInput = (e) => {
    e.target.value = "";
  };

  const handlePropertySearchInput = (e) => {
    setState((prev) => ({ ...prev, propertySearchInput: e.target.value }));
  };

  const handlePropertySearch = (e) => {
    e.preventDefault();
    const propertySearchInput = state.propertySearchInput;
    const newName = propertySearchInput.split(" ")[0];
    console.log(newName);
    const newObj = propertiesJSON.filter(
      (item) =>
        item.name.toLowerCase() === `${newName.toLowerCase()} residences`
    );
    setState((prev) => ({ ...prev, searchResult: newObj[0] }));
  };

  const renderPropertySearchResult = () => {};

  const handleSortByItems = () => {
    const propertySortitems = state.propertySortitems;
    return propertySortitems.map((item, index) => (
      <Link
        key={item.linkTo + index}
        name={item.linkTo}
        className="notActive"
        to={`../property/type/${item.linkTo}`}
      >
        {item.name}
      </Link>
    ));
  };

  const propertyCategory = (e) => {
    const getBuildingType = () => {
      const newObj = propertiesJSON.filter((obj) => obj.buildingType === e);
      return newObj.slice(0, 5).map((item) => (
        <Link
          to={`../${item.name.split(" ").join("-").toLowerCase()}`}
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
      return newObj.map((item) => (
        <Link
          to={`../${item.name.split(" ").join("-").toLowerCase()}`}
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
      return newObj.map((item) => (
        <Link
          to={`../${item.name.split(" ").join("-").toLowerCase()}`}
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
    }

    if (e === "all-properties") {
      const newObj = propertiesJSON;
      return newObj.map((item) => (
        <Link
          to={`../${item.name.split(" ").join("-").toLowerCase()}`}
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
    } else {
      // console.log(e);
      return getPropertyLocation();
    }
  };

  const handlePropertySort = () => {
    console.log("Property Sort Function");
  };

  const handlePropertyTypes = () => {
    const newObj = [
      {
        url: state.premier[0].cardImage,
        title: "Premier",
        name: "premier",
      },
      {
        url: state.bestSelling[0].cardImage,
        title: "Best Selling",
        name: "best-seller",
      },
      {
        url: state.rfo[0].cardImage,
        title: "Ready for Occupancy",
        name: "rfo",
      },
      {
        url: state.preSelling[0].cardImage,
        title: "Pre-Selling",
        name: "pre-selling",
      },
    ];

    return newObj.map((item, index) => {
      const bg = {
        backgroundImage: `url(${item.url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };

      return (
        <Link to={`../property/type/${item.name}`} key={item.title + index}>
          <div style={bg}>
            <div className="property-icon-image">
              <p>{item.title}</p>
            </div>
          </div>
        </Link>
      );
    });
  };

  const handleLocationLinks = () => {
    const locations = state.locations;
    return locations.map((item, index) => (
      <Link
        to={`../property/type/${item.split(" ").join("-")}`}
        key={item + index}
      >
        {item === "quezon" ? "QUEZON CITY" : item.toUpperCase()}
      </Link>
    ));
  };

  const resetShowMoreButtonIndex = () => {
    setState((prev) => ({ ...prev, showMoreButtonIndex: 4 }));
  };

  const handleShowMoreButton = (e) => {
    setState((prev) => ({ ...prev, showMoreButtonIndex: e }));
  };

  const handleContactModalState = () => {
    setState((prev) => ({
      ...prev,
      contactModalIsActive: !prev.contactModalIsActive,
      activeModal: !prev.activeModal,
    }));
  };

  const handlePremierProperties = () => {
    ///////////////////////////////////////////////////////////
    // DO NOT USE THIS FUNCTION ///////////////////////////////
    ///////////////////////////////////////////////////////////
    const premierProperties = state.premier;
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

  const handleBestSellingProperties = () => {
    ///////////////////////////////////////////////////////////
    // DO NOT USE THIS FUNCTION ///////////////////////////////
    ///////////////////////////////////////////////////////////
    const bestSellingProperties = state.bestSelling;
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

  const navbarLinks = () => {
    // map over navLinks to display in Navbar
    const urlName = document.URL.split("/")[3];
    return state.navLinks.map((item, index) => {
      const newItem = item.charAt(0).toUpperCase() + item.slice(1);
      return (
        <Link
          to={`../${item}`}
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

  const handleHamburgerIcon = (e) => {
    // toggle hamburger icon
    setState((prev) => ({
      ...prev,
      hamburgerIsActive: !prev.hamburgerIsActive,
      navbarActiveLink: e.target.name,
    }));
  };

  const helpfulLinks = () => {
    // map over helpfulLinks to display in Footer
    return state.helpfulLinks.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.link} key={item.title + index}>
            {item.title}
          </Link>
        </li>
      );
    });
  };

  const locationLinks = () => {
    // map over locations to display in Footer
    return state.locations.map((location, index) => {
      return (
        <li key={index}>
          <Link to={`../property/location/${location}`} key={location + index}>
            {location === "quezon"
              ? location
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ") + ` City`
              : location
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
          </Link>
        </li>
      );
    });
  };

  const modalEmailOnClick = () => {
    setState((prev) => ({
      ...prev,
      contactModalIsActive: !prev.contactModalIsActive,
      activeModal: !prev.activeModal,
      hamburgerIsActive: false,
    }));
  };

  const scrollDocumentToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

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
        handleHomeHero,
        handleContactSpinner,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
