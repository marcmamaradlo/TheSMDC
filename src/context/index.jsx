import React, { Component } from "react";
import { Link } from "react-router-dom";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    test: true, // true, false
    locations: [
      "Makati",
      "Manila",
      "Mandaluyong",
      "Paranaque",
      "Cavite",
      "Bulacan",
      "Laguna",
    ],
    helpfulLinks: ["Home", "About Us", "How to Reserve", "Contact Us"],
    navLinks: ["home", "about", "properties", "reservation", "contact"],
    hamburgerIsActive: false,
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
    } = this;

    return (
      <MyContext.Provider
        value={{
          state,
          helpfulLinks,
          locationLinks,
          handleHamburgerIcon,
          navbarLinks,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
