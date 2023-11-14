import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./global.css";
import { Home } from "./Pages/Home/Home.jsx";
// import { Header } from "./Pages/Home/Header/Header.jsx";
import { About } from "./Pages/About/About.jsx";
import { Error404 } from "./Pages/Error404/Error404.jsx";
// import { ApartmentRental } from "./Pages/ApartmentRental";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
