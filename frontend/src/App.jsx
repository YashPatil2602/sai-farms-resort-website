import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import DestinationWedding from "./pages/DestinationWedding";
import StaycationCorporate from "./pages/StaycationCorporate";
import SchoolPicnic from "./pages/SchoolPicnic";
import Accommodation from "./pages/Accommodation";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination-wedding"
          element={<DestinationWedding />}
        />
        <Route
          path="/staycation-corporate"
          element={<StaycationCorporate />}
        />
        <Route
          path="/school-picnic"
          element={<SchoolPicnic />}
        />
        <Route
          path="/accommodation"
          element={<Accommodation />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
