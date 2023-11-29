import s from "./style.module.css";
import PropTypes from "prop-types";

export function Banner({ image, title = null }) {
  return (
    <>
      <div className={s.banner}>
        <span className={s.banner_opacity}></span>
        <img className={s.main_banner} src={image} alt="Bannière Kasa" />
        <h1 className={s.title}>{title}</h1>
      </div>
    </>
  );
}

Banner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};
