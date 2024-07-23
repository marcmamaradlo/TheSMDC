import { useEffect } from "react";
import HomeCarousel from "../banner-carousel/HomeCarousel";
import Category from "./Category";
import Contact from "../contact/Contact";

const Home = () => {
  useEffect(() => {
    document.title = "The SMDC | Your Dream Home Awaits.";
  }, []);

  return (
    <>
      <HomeCarousel />
      <Category />
      <Contact />
    </>
  );
};

export default Home;
