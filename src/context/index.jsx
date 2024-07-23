import React, { Component } from "react";

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
    hamburgerIsActive: false,
  };

  handleHamburgerIcon = () => {
    const hamburgerIsActive = this.state.hamburgerIsActive;
    this.setState({ hamburgerIsActive: !hamburgerIsActive });
  };

  helpfulLinks = () => {
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
    const { state, helpfulLinks, locationLinks, handleHamburgerIcon } = this;

    return (
      <MyContext.Provider
        value={{
          state,
          helpfulLinks,
          locationLinks,
          handleHamburgerIcon,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };
