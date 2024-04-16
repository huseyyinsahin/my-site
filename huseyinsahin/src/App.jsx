import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Form from "./components/Form";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/myprojects" element={<MyProjects />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
