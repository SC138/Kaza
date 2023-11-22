import s from "./style.module.css";
import logo from "../../assets/images/logored.png";
import PropTypes from "prop-types";

export function Header({ style}) {
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

Header.propTypes = {
  style: PropTypes.object,
};