import { useContext } from "react";
import { MyContext } from "../../../context";

const GalleryDescription = () => {
  const context = useContext(MyContext);
  const galleryDescription = context.state.galleryDescription;
  const galleryTitle = context.state.galleryTitle;
  const galleryButtons = context.state.galleryButtons;
  const galleryData = context.state.galleryData;

  const capitalizeFirstLetter = (string) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
  };

  const handleTitle = () => {
    return galleryTitle === ""
      ? capitalizeFirstLetter(galleryButtons[0])
      : capitalizeFirstLetter(galleryTitle);
  };

  const handleDescription = () => {
    return galleryDescription === ""
      ? galleryButtons[0] === "amenity"
        ? galleryData.singleItem.amenity.description
        : galleryButtons[0] === "lobby"
        ? galleryData.singleItem.grandLobby.description
        : galleryButtons[0] === "unit"
        ? galleryData.singleItem.unit.description
        : null
      : galleryDescription;
  };

  return (
    <>
      <h4>{handleTitle()}</h4>

      <p>{handleDescription()}</p>
    </>
  );
};

export default GalleryDescription;
