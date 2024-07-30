import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./context";
import Router from "./router/Router";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import ModalIcons from "./components/modal/ModalIcons";
const App = () => {
  const context = useContext(MyContext);
  const contactModalIsActive = context.state.contactModalIsActive;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
        {contactModalIsActive ? <Modal /> : null}
        <ModalIcons />
      </BrowserRouter>
    </>
  );
};

export default App;
