import s from "./style.module.css";
import logo from "../../assets/images/LOGO-WHITE.png";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerContent}>
        <img className={s.logo} src={logo} alt="Logo Kaza" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
