import s from "./style.module.css";
import logo from "../../assets/images/logored.png";
import PropTypes from "prop-types";

// Définit le composant Header.
export function Header({ style}) {
  // Rendu du composant Header.
  return (
    <header className={s.header}>
      <div className={s.container} style={style}>
        <img className={s.logo} src={logo} alt="Logo Kaza" />
        <nav>
          <ul className={s.link_nav}>
            <li>
              <a className={s.link} href="/">
                Accueil
              </a>
            </li>
            <li>
              <a className={s.link} href="/about">
                À propos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
// Définit le type des props du composant Header.
Header.propTypes = {
  style: PropTypes.object,
};