import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./global.css";
import { Home } from "./Pages/Home/Home.jsx";
import { About } from "./Pages/About/About.jsx";
import { Error404 } from "./Pages/Error404/Error404.jsx";
import data from "./data/logements.json";
import { ApartmentRental } from "./Pages/ApartmentRental/ApartmentRental";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {data.map((rental) => (
            <Route
              key={rental.id}
              path="/location/:id"
              element={<ApartmentRental />}
            />
          ))}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
