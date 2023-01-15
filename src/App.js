import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home.js";
import About from "./component/About.js";
import Navbar from "./component/Navbar.js";
import Contact from "./component/Contact.js";
import Card from "./component/Card.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
        <Navbar/>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/card/:user" element={<Card/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
