import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import PropertiesJSON from "../../../properties.json";
import Card from "../../card/Card";

const Pagination = ({ data }) => {
  useEffect(() => {
    console.log(data);
    console.log(params);
  }, []);

  const propertyType = data.filter((obj) => obj.propertyType === "featured");

  const params = useParams();
  const [properties, setProperties] = useState(propertyType);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = properties.slice(firstPostIndex, lastPostIndex);
  console.log(currentPosts);

  return (
    <>
      <div>
        <h4>PAGINATION</h4>
      </div>
    </>
  );
};

export default Pagination;
