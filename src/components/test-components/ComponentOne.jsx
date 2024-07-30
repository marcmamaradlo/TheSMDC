import React from "react";

const ComponentOne = ({ data }) => {
  console.log(data);

  const feature = data.singleItem.feature;
  const amenity = data.singleItem.amenity;
  amenity.content.map((item) => console.log(item));
  const unit = data.singleItem.unit;
  const grandLobby = data.singleItem.grandLobby;
  return (
    <>
      <img src={data.bannerImage} alt="banner-image" />
      <div className="component">
        <h5>{data.name}</h5>
        <p>{data.cardPrice}</p>
        <p>{data.bannerAbout}</p>
        <p>{data.cardAddress}</p>
      </div>
      <div className="component">
        <h5>{grandLobby.title}</h5>
        <p>{grandLobby.description}</p>
        <div className="card-s-unit-image-container">
          {grandLobby.image.map((item, index) => (
            <img src={item} alt="Grand Lobby" key={index} />
          ))}
        </div>
      </div>
      <div className="component">
        <h5>{feature.title}</h5>
        <p>{feature.description}</p>
        {/* <div className="card-s-unit-image-container"> */}
        <img src={feature.image} alt={feature.title} />
        {/* </div> */}
      </div>
      <div className="component">
        <h5>{amenity.title}</h5>
        <p>{amenity.description}</p>
        {amenity.content.map((item, index) => (
          <p key={item + index}>{item}</p>
        ))}
        <div className="card-s-unit-image-container">
          {amenity.image.map((item, index) => (
            <img
              src={item}
              alt={`amenity-image-${index}`}
              key={`amenity-image-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="component">
        <h5>{unit.title}</h5>
        <p>{unit.description}</p>
        {unit.type.map((item, index) => (
          <p key={item.name + index}>{item.name}</p>
        ))}
        <div className="card-s-unit-image-container">
          {data.singleItem.unit.image.map((item, index) => (
            <img
              src={item}
              alt={`unit-image-${index}`}
              key={`unitImage${index}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ComponentOne;
