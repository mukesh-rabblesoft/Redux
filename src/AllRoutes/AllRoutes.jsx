import React, { Fragment } from "react";
import Header from "../Components/Header/Header";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import Home from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:id" element={<Contact />} />
      </Routes>
    </Fragment>
  );
};
export default AllRoutes;
