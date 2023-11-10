import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./global.css";
import { Home } from "./Pages/Home/Home.jsx";
// import { Header } from "./Pages/Home/Header/Header.jsx";
import { About } from "./Pages/About/About.jsx";
// import { ApartmentRental } from "./Pages/ApartmentRental";
// import { Error404 } from "./Pages/Error404";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
