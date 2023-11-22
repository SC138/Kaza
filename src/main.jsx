// Importe React et ReactDOM depuis les bibliothèques React.
import React from "react";
import ReactDOM from "react-dom/client";
// Importe le composant App depuis le fichier App.jsx.
import App from "./App.jsx";


// Utilise ReactDOM pour créer un "root" dans le document HTML et rend le composant App à l'intérieur.
ReactDOM.createRoot(document.getElementById("root")).render(
  // Enveloppe le composant App avec <React.StrictMode> pour des vérifications supplémentaires en mode de développement.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
