import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Beaches from "./pages/Beaches";
import BikeTour from "./pages/BikeTour";
import BestTime from "./pages/BestTime";
import OurPackage from "./pages/OurPackage";
import Luxury from "./pages/Luxury";
import Maldives from "./pages/Maldives";
import Malaysia from "./pages/Malaysia";
import Singapore from "./pages/Singapore";
import Thailand from "./pages/Thailand";
import Dubai from "./pages/Dubai";
import International  from "./pages/International";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/bike-tour" element={<BikeTour />} />
        <Route path="/best-time" element={<BestTime />} />
        <Route path="/packages" element={<OurPackage />} />
        <Route path="/luxury" element={<Luxury />} />
        <Route path="/maldives" element={<Maldives />} />
        <Route path="/malaysia" element={<Malaysia />} />
        <Route path="/singapore" element={<Singapore />} />
        <Route path="/thailand" element={<Thailand />} />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/international" element={<International  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
