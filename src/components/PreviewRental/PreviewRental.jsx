import { useEffect, useState } from "react";
import s from "./style.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function PreviewRental({ id, image, title }) {
  const [currentElement, setCurrentElement] = useState(id);

  
  useEffect(() => {
    setCurrentElement(id);
  }, [currentElement]);
  return (
    <>
      <Link to={`/logement/${id}`} className={s.PreviewRental}>
        <img className={s.imgPreview} src={image} />
        <h2 className={s.titleRental}>{title}</h2>
        <span className={s.overlay}></span>
      </Link>
    </>
  );
}

PreviewRental.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};
