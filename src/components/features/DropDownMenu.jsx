import React from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../context";
import Select from "react-select";

const DropDownMenu = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  // const propertySortitems = context.state.propertySortitems;
  // const handleSelectOption = context.handleSelectOption;

  const locations = context.state.locations || [];
  const options = locations.map((loc) => {
    // Friendly display mapping for certain locations
    if (loc === "quezon") return { value: loc, label: "Quezon City" };
    if (loc === "las pinas") return { value: loc, label: "Las Piñas" };
    // Title-case other locations
    const label = loc
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return { value: loc, label };
  });

  const customStyles = {
    "&:hover": { borderColor: "none" },
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: "3px",
    minHeight: "4rem",
    boxShadow: "unset",
    fontSize: "1.6rem",
  };

  const customOption = {
    cursor: "pointer",
    borderRadius: "unset",
    ":active": { backgroundColor: "#bb7000" },
    height: "4rem",
    backgroundColor: "white",
    color: "#323231",
    fontSize: "1.4rem",
    ":hover": { backgroundColor: "#bb7000" },
  };

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      ...customStyles,
    }),
    option: (styles) => ({ ...styles, ...customOption }),
  };

  const handleChange = (e) => {
    console.log(e.value);
    navigate(`../property/location/${e.value}`);
  };
  return (
    <>
      <Select onChange={handleChange} styles={colorStyles} options={options} />
    </>
  );
};

export default DropDownMenu;
