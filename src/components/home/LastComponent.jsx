import { CustomLink } from "../buttons/Buttons";

const LastComponent = () => {
  return (
    <>
      <div className="component">
        <h3>SMDC</h3>
        <h4>The leading developer in the Philippines.</h4>
        <p className="text-justify">
          If you are looking for an investment opportunity consider the SMDC.
          With properties still currently being built and still lined-up, the
          Philippines is still definitely enjoying the major surge of the Real
          Estate Market.
        </p>
        <div className="propert-about-button-container">
          <CustomLink
            text="view all properties"
            style="button-call-to-action"
            linkTo={`/property`}
          />
          <CustomLink
            text="About Us"
            style="button-call-to-action"
            linkTo={`/about`}
          />
        </div>
      </div>
    </>
  );
};

export default LastComponent;
