import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Properties from "../components/properties/Properties";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
};

export default Router;
