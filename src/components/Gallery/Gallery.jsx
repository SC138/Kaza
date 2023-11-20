import { useState } from "react";
import s from "./style.module.css";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import PropTypes from "prop-types";

export function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const Next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className={s.gallery}>
      <img className={s.imgGallery} src={images[currentIndex]} alt="Gallery" />
      
      {/* Flèches de navigation */}
      <div className={s.controls}>
        <button onClick={Previous} aria-label="Previous image">
          <ChevronLeft className={s.chevron} />
        </button>
        <button onClick={Next} aria-label="Next image">
          <ChevronRight className={s.chevron} />
        </button>
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
