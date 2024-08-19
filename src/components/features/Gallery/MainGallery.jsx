import { useContext, useEffect } from "react";
import { MyContext } from "../../../context";
import GalleryButtons from "./GalleryButtons";
import GalleryDescription from "./GalleryDescription";
import GalleryImage from "./GalleryImage";

const MainGallery = ({ data }) => {
  const context = useContext(MyContext);
  const getMainGalleryData = context.getMainGalleryData;
  const galleryButtons = context.state.galleryButtons;
  const galleryImage = context.state.galleryImage;
  const galleryDefaultState = context.state.galleryDefaultState;

  useEffect(() => {
    getMainGalleryData(data);

    return () => {
      galleryDefaultState();
    };
  }, []);

  return (
    <>
      {galleryButtons.length === 0 ? null : (
        <div className="single-item-section">
          <div className="gallery-container">
            <div className="gallery-button-container">
              <GalleryButtons />
            </div>
            <div className="image-container">
              {Array.isArray(galleryImage) ? (
                <div className="slider-container">
                  <GalleryImage />
                </div>
              ) : null}

              <div className="gallery-description">
                <GalleryDescription />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainGallery;
