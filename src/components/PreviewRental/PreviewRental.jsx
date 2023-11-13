import { useEffect, useState } from "react";
import s from "./style.module.css";
import PropTypes from "prop-types";

export function PreviewRental({ id, image, title }) {
  const [currentElement, setCurrentElement] = useState(id);
  useEffect(() => {
    setCurrentElement(id);
  }, [currentElement]);
  return (
    <>
      <a className={s.PreviewRental} href="/">
        <img className={s.imgPreview} src={image} />
        <h2 className={s.titleRental}>{title}</h2>
        <span className={s.overlay}></span>
      </a>
    </>
  );
}

PreviewRental.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};
