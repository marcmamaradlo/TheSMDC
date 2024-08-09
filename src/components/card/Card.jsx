const Card = ({ id, name, cardImage, priceMax, priceMin, shortAddress }) => {
  const cardBG = {
    backgroundImage: `url('${cardImage}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div className="card" key={id} style={{ ...cardBG }}>
        <div className="card-body">
          {/* <img src={cardImage} alt={name} /> */}
          <div className="card-details">
            <div className="card-name">
              <h2>{name}</h2>
              <p>
                {priceMin} - {priceMax}
              </p>
            </div>
            {/* <p className="card-decription">{cardDescription}</p> */}
            <div className="card-address">
              {/* <i className="fa-solid fa-location-dot"></i> */}
              <p>{shortAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
