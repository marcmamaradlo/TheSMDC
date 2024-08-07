import Slider from "react-slick";
import { Link } from "react-router-dom";

const Featured = ({ data }) => {
  // console.log(data);

  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    // className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 600,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const showFeatured = () => {
    return data.map((item) => {
      return (
        <div className="featured-container" key={item.id}>
          <div>
            <img src={item.cardImage} alt="card-image" />
          </div>
          <div>
            <img src={item.bannerImage} alt="card-image" />
          </div>
          <div>
            <img src={item.gallery[0]} alt="card-image" />
          </div>
          {/* </div> */}
          <div className="featured-content">
            <h4>{item.singleItem.feature.title}</h4>
            <h3>{item.name}</h3>
            <p>{item.cardDescription}</p>
          </div>
          <div className="featured-links">
            <Link to="/properties">VIEW ALL PROPERTY</Link>
            <Link to={`/properties/${item.name.toLowerCase()}`}>
              VIEW PROPERTY
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Slider {...settings}>{showFeatured()}</Slider>
    </>
  );
};

export default Featured;
