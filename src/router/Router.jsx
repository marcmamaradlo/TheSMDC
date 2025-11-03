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
        <Route path="*">
          <Route path="*" element={<Home />} />
        </Route>

        <Route path="about">
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="contact">
          <Route path="/contact" element={<ContactUs />} />
        </Route>

        <Route path="property">
          {/* /property */}
          <Route index element={<Property />} />
          {/* /property/:name */}
          <Route path=":name" element={<RenderSingleItem />} />
          {/* /property/type/:selector */}
          <Route path="type/:selector" element={<RenderCategory />} />
          {/* /property/location/:selector */}
          <Route path="location/:selector" element={<RenderCategory />} />
        </Route>

        <Route path="reservation">
          <Route path="/reservation" element={<Reservation />} />
        </Route>

        <Route path="test">
          <Route path="/test" element={<TestComponentOne />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
