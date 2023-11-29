import { useState } from "react";
import s from "./style.module.css";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import PropTypes from "prop-types";

// Définit le composant Gallery.
export function Gallery({ images }) {
  // Utilise useState pour gérer l'index de l'image actuellement affichée.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Définit les fonctions Previous et Next pour naviguer dans la galerie.
  const Previous = () => {
    setCurrentIndex((prevIndex) =>
      // Si l'index de l'image actuellement affichée est supérieur à 0, on décrémente l'index de 1.
      // Sinon, on affiche la dernière image de la galerie.
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const Next = () => {
    setCurrentIndex((prevIndex) =>
      // Si l'index de l'image actuellement affichée est inférieur au nombre d'images - 1, on incrémente l'index de 1.
      // Sinon, on affiche la première image de la galerie.
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={s.gallery}>
      <img className={s.imgGallery} src={images[currentIndex]} alt="Gallery" />

      {/* Flèches de navigation */}
      <div className={s.controls}>
        {images.length > 1 && (
          <button onClick={Previous} aria-label="Previous image">
            <ChevronLeft className={s.chevron} />
          </button>
        )}
        {images.length > 1 && (
          <button onClick={Next} aria-label="Next image">
            <ChevronRight className={s.chevron} />
          </button>
        )}
      </div>

      {/* Compteur d'images */}
      <div className={s.counter}>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
