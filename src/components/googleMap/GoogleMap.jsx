import { useContext } from "react";
import { MyContext } from "../../context";

const GoogleMap = ({ mapURL }) => {
  const context = useContext(MyContext);
  const mapID = context.state.mapID;
  const mapAttributes = {
    title: "Map Example",
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
  };
  return (
    <>
      {/* <h5>Maps</h5> */}
      <div className="google-map-container">
        <iframe allowFullScreen src={mapURL} {...mapAttributes}></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
