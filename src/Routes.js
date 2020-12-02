import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adidas from "./Components/Adidas";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Nike from "./Components/Nike";
import ShoeDetail from "./Components/ShoeDetail";

export default function RouteConfig() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adidas" element={<Adidas />} />
        <Route exact path="/nike" element={<Nike />} />
        <Route exact path="/shoe/:shoeId" element={<ShoeDetail />} />
      </Routes>
    </Router>
  );
}
