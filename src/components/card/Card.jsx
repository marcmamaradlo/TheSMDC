const Card = ({
  id,
  name,
  cardImage,
  cardPrice,
  cardAddress,
  cardDescription,
}) => {
  return (
    <>
      <div className="card" key={id}>
        <div className="card-body">
          <img src={cardImage} alt={name} />
          <div className="card-details">
            <div className="card-name">
              <h2>{name}</h2>
              <p>{cardPrice}</p>
            </div>
            {/* <p className="card-decription">{cardDescription}</p> */}
            <div className="card-address">
              {/* <i className="fa-solid fa-location-dot"></i> */}
              <p>{cardAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
