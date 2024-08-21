import { Carousel } from "nuka-carousel";
import premier from "../../premier.json";

const HomeCarousel = () => {
  const images = () => {
    return premier.map((item) => {
      const carouselBackground = {
        backgroundImage: `url(${item.bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };

      return (
        <div
          className="carousel-container"
          style={{ ...carouselBackground }}
          key={item.id}
        >
          <div className="carousel-card-body">
            <img src={item.logo.white} alt={item.name} />
            <p>For as low as</p>
            <p>{item.cardPrice}</p>
            <p>{item.cardDescription}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Carousel
        autoplay={true}
        autoplayInterval="5000"
        swiping={true}
        wrapMode="wrap"
        showArrows="hover"
        showDots={true}
      >
        {images()}
      </Carousel>
    </>
  );
};

export default HomeCarousel;
