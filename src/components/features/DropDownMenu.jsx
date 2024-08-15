import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context";
import Select from "react-select";

const DropDownMenu = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const propertySortitems = context.state.propertySortitems;
  const handleSelectOption = context.handleSelectOption;

  const options = [
    { value: "quezon", label: "Quezon City" },
    { value: "manila", label: "Manila" },
    { value: "mandaluyong", label: "Mandaluyong" },
    { value: "cavite", label: "Cavite" },
    { value: "makati", label: "Makati" },
    { value: "paranaque", label: "Paranaque" },
    { value: "muntinlupa", label: "Muntinlupa" },
    { value: "pasay", label: "Pasay" },
    { value: "pasig", label: "Pasig" },
    { value: "batangas", label: "Batangas" },
    { value: "bulacan", label: "Bulacan" },
    { value: "davao", label: "Davao" },
    { value: "laguna", label: "Laguna" },
    { value: "rizal", label: "Rizal" },
    { value: "pampanga", label: "Pampanga" },
    { value: "tagaytay", label: "Tagaytay" },
    { value: "iloilo", label: "Iloilo" },
    { value: "taguig", label: "Taguig" },
    { value: "bacolod", label: "Bacolod" },
    { value: "las pinas", label: "Las Pinas" },
    { value: "tarlac", label: "Tarlac" },
    { value: "cagayan de oro", label: "Cagayan De Oro" },
  ];

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
    navigate(`/property/location/${e.value}`);
  };
  return (
    <>
      <Select onChange={handleChange} styles={colorStyles} options={options} />
    </>
  );
};

export default DropDownMenu;
