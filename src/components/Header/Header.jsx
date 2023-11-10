import s from "./style.module.css";
import logo from "../../assets/images/logored.png";

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>
          <img className={s.logo} src={logo} alt="Logo Kaza" />
        </div>
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
