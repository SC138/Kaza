import s from "./style.module.css";
import { StarFill, Star } from "react-bootstrap-icons";
import PropTypes from "prop-types";

// Définit le composant Rating pour afficher les étoiles.
export function Rating({ rating }) {
  const starList = [];

  // Calcule le nombre d'étoiles pleines et vides.
  const starFillCount = Math.floor(rating);
  const starEmptyCount = 5 - starFillCount;

  // Boucle pour ajouter les étoiles pleines dans le tableau starList.
  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} className={s.star} />);
  }

  // Boucle pour ajouter les étoiles vides dans le tableau starList.
  for (let i = 0; i < starEmptyCount; i++) {
    starList.push(<Star key={"star-empty" + i} className={s.starEmpty} />);
  }

  // Rendu du composant Rating.
  return <div>{starList}</div>;
}

// Définit le type des props du composant Rating.
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
