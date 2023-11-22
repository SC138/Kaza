import { useEffect, useState } from "react";
import s from "./style.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Définit le composant PreviewRental.
export function PreviewRental({ id, image, title }) {
  // Définit l'état currentElement.
  const [currentElement, setCurrentElement] = useState(id);

  // Met à jour l'état currentElement en utilisant useEffect.
  useEffect(() => {
    setCurrentElement(id);
  }, [currentElement]);
  // Rendu du composant PreviewRental.
  return (
    <>
     {/* Utilise le composant Link pour créer un lien vers la page de détails de la location. */}
      <Link to={`/logement/${id}`} className={s.PreviewRental}>
        <img className={s.imgPreview} src={image} />
        <h2 className={s.titleRental}>{title}</h2>
        <span className={s.overlay}></span>
      </Link>
    </>
  );
}
// Définit le type des props du composant PreviewRental.
PreviewRental.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};
