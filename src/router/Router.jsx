import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";
import ContactUs from "../components/contact/ContactUs";
import Property from "../components/property/Property";
import Reservation from "../components/reservation/Reservation";
import RenderSingleItem from "../components/property/RenderSingleItem";
import TestComponentOne from "../components/test-components/TestComponentOne";
import RenderCategory from "../components/property/RenderCategory";
import Search from "../components/search/Search";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/property" element={<Property />} />
        <Route path="/property/:name" element={<RenderSingleItem />} />
        <Route path="/property/search" element={<Search />} />
        <Route path="/property/type/:selector" element={<RenderCategory />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/test" element={<TestComponentOne />} />
      </Routes>
    </>
  );
};

export default Router;
