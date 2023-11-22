import s from "./style.module.css";
import { StarFill, Star as StarHalf } from "react-bootstrap-icons";
import PropTypes from "prop-types";

// Définit le composant Rating pour afficher les étoiles.
export function Rating({ rating }) {
  const starList = [];

  // Calcule le nombre d'étoiles pleines, demi-étoiles et vides.
  const starFillCount = Math.floor(rating);
  const hasStarHalf = rating - starFillCount >= 0.5;
  const starEmptyCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  // Boucle pour ajouter les étoiles pleines, demi-étoiles et vides dans le tableau starList.
  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} className={s.star} />);
  }
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} className={s.star} />);
  }
  for (let i = 0; i < starEmptyCount; i++) {
    starList.push(<StarFill key={"star-empty" + i} className={s.starEmpty} />);
  }

  // Rendu du composant Rating.
  return <div>{starList}</div>;
}

// Définit le type des props du composant Rating.
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};
