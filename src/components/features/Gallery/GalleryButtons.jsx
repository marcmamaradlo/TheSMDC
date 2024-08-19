import { useContext } from "react";
import { MyContext } from "../../../context";
import { Buttons } from "../../buttons/Buttons";

const GalleryButtons = () => {
  const context = useContext(MyContext);
  const galleryButtons = context.state.galleryButtons;
  const handleGalleryButtonClick = context.handleGalleryButtonClick;
  const galleryTitle = context.state.galleryTitle;

  const renderButtons = () => {
    return galleryButtons.map((item, index) => (
      <Buttons
        style={
          galleryTitle === ""
            ? galleryButtons[0] === "amenity"
              ? "gallery-button--active"
              : galleryButtons[0] === "lobby"
              ? "gallery-button--active"
              : galleryButtons[0] === "unit"
              ? "gallery-button--active"
              : null
            : item === galleryTitle
            ? "gallery-button--active"
            : "gallery-button-default"
        }
        key={item + index}
        onclick={handleGalleryButtonClick}
        text={item.toUpperCase()}
        name={item}
      />
    ));
  };
  return <>{renderButtons()}</>;
};

export default GalleryButtons;
