import { useContext } from "react";
import { MyContext } from "../../context";
import SMDCLogo from "../../assets/NewSMDCLogo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const context = useContext(MyContext);
  const handleHamburgerIcon = context.handleHamburgerIcon;
  const navbarLinks = context.navbarLinks;
  const state = context.state;
  return (
    <>
      <div className="navbar box-shadow">
        <div className="navbar-logo">
          <Link to="/">
            <img src={SMDCLogo} alt="SMDC Logo" />
          </Link>
        </div>
        <div className="navbar-links">
          {/* <a href="*">Home</a>
          <a href="*">Properties</a>
          <a href="*">Contact</a> */}
          <i className="fa-solid fa-bars" onClick={handleHamburgerIcon}></i>
        </div>
      </div>
      {state.hamburgerIsActive ? (
        <div className="navbar-links-mobile">{navbarLinks()}</div>
      ) : null}
    </>
  );
};

export default Navbar;
