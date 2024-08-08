import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";
import ContactUs from "../components/contact/ContactUs";
import Properties from "../components/properties/Properties";
import Reservation from "../components/reservation/Reservation";
import RenderSingleItem from "../components/properties/RenderSingleItem";
import TestComponentOne from "../components/test-components/TestComponentOne";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:name" element={<RenderSingleItem />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/test" element={<TestComponentOne />} />
      </Routes>
    </>
  );
};

export default Router;
