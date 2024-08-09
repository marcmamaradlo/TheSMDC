import { useParams, Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

const RenderProperties = () => {
  const params = useParams();
  console.log(params);
  const propertyName =
    params.property.charAt(0).toUpperCase() + params.property.slice(1);
  console.log(propertyName);
  useEffect(() => {
    document.title = `${propertyName} Properties | SMDC`;
  });

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
