/* eslint-disable react/no-unescaped-entities */
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import s from "./style.module.css";

export function Error404() {
  return (
    <>
      <Header />
      <main className={s.containerError}>
        <div className={s.error404}>
          <h1 className={s.errorTitle}>404</h1>
          <p className={s.errorPara}>
            Oups! La page que vous demandez n'existe pas.
          </p>
          <a className={s.errorLink} href="/">
            Retourner sur la page d'accueil
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
