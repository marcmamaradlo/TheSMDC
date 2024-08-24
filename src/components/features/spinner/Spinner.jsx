import { useEffect } from "react";

const Spinner = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className="spinner-container">
        <p>
          <span className="loader"></span>
          Loading...
        </p>
      </div>
    </>
  );
};

export default Spinner;
