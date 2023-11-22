// Importe les modules nécessaires de react-router-dom pour gérer les routes.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./global.css";

// Importe les composants de pages.
import { Home } from "./Pages/Home/Home.jsx";
import { About } from "./Pages/About/About.jsx";
import { Error404 } from "./Pages/Error404/Error404.jsx";
import { ApartmentRental } from "./Pages/ApartmentRental/ApartmentRental";
// Importe les données des logements.
import data from "./data/logements.json";

// Crée un composant App qui rend les composants de pages en fonction de l'URL.
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
              path="/logement/:id"
              element={<ApartmentRental />}
            />
          ))}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
// Exporte le composant App.
export default App;
