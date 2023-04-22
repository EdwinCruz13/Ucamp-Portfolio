import { React } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";

//import all the pages created
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { Skills } from "./pages/Skills/Skills";
import { Works } from "./pages/Works/Works";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
