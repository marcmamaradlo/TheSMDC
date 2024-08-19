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
        <div className="card-body gradiant-black">
          <div className="card-details">
            <div className="card-name">
              <h2>{name}</h2>
              {priceMin && priceMax === "NaN" ? null : (
                <p>{`Php ${priceMin} - Php ${priceMax}`}</p>
              )}
            </div>
            <div className="card-address">
              <p>{shortAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
