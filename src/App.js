import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavModal from "./components/NavModal";
import LocationModal from "./components/LocationModal";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openNavModal, setOpenNavModal] = useState(false);
  useEffect(() => setOpenModal(true), []);
  return (
    <>
      {openModal && <LocationModal setOpenModal={setOpenModal} />}
      {openNavModal && <NavModal setOpenNavModal={setOpenNavModal} />}
      <Header setOpenNavModal={setOpenNavModal} />
      <div className="container-boxed">
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default App;
