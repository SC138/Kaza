import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import s from "./style.module.css";

// Crée un composant Error404 qui rend le composant Header et le composant Footer.
export function Error404() {
  return (
    <>
      <Header />
      <main className={s.containerError}>
        <div className={s.error404}>
          <h1 className={s.errorTitle}>404</h1>
          <p className={s.errorPara}>
            <span className={s.textMobile}>Oups! La page que</span> vous
            demandez n&apos;existe pas.
          </p>
          <a className={s.errorLink} href="/">
            Retourner sur la page d&apos;accueil
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
