import { useParams, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

const RenderProperties = () => {
  const params = useParams();
  const propertyName =
    params.property.charAt(0).toUpperCase() + params.property.slice(1);

  useEffect(() => {
    document.title =
      propertyName === "rfo"
        ? "SMDC Ready for Occupancy Properties"
        : propertyName === "pre-selling"
        ? "SMDC Pre-Selling Properties"
        : "SMDC Property";
  }, [params.property]);

  return (
    <>
      <div className="component">
        <h3>{propertyName}</h3>
        <h4>Properties</h4>
      </div>
    </>
  );
};

export default RenderProperties;
