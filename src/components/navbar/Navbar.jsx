import { useContext } from "react";
import { MyContext } from "../../context";
import SMDCLogo from "../../assets/NewSMDCLogo.jpg";
const Navbar = () => {
  const context = useContext(MyContext);
  const handleHamburgerIcon = context.handleHamburgerIcon;
  const state = context.state;
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={SMDCLogo} alt="SMDC Logo" />
        </div>
        <div className="navbar-links">
          {/* <a href="*">Home</a>
          <a href="*">Properties</a>
          <a href="*">Contact</a> */}
          <i className="fa-solid fa-bars" onClick={handleHamburgerIcon}></i>
        </div>
      </div>
      {state.hamburgerIsActive ? (
        <div className="navbar-links-mobile">
          <a href="*">Home</a>
          <a href="*">About Us</a>
          <a href="*">Properties</a>
          <a href="*">Reservations</a>
          <a href="*">Contact</a>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
