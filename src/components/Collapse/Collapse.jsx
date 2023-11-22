import s from "./style.module.css";
import { ChevronUp } from "react-bootstrap-icons";
import { useState } from "react";
import PropTypes from "prop-types";

// Définit le composant Collapse.
export function Collapse({ title, children, style }) {
  // Utilise useState pour gérer l'état du composant, en gardant la trace de l'état actif ou inactif.
  const [isActive, setIsActive] = useState(false);
  // Définit la fonction toggle pour changer l'état du composant au clique.
  const toggle = () => setIsActive(!isActive);

  // Ajoute un gestionnaire d'événements de clic sur les icônes de chevrons.
  const handleChevronClick = () => {
    // Appelle la fonction toggle pour basculer l'état actif/inactif.
    toggle();
  };

  // Rendu du composant Collapse.
  return (
    <>
      <section className={s.element} style={style}>
        <h2 className={s.title} onClick={() => toggle()}>
          {title}
        </h2>
        {/* Affiche une icône de chevron vers le haut ou vers le bas en fonction de l'état actif. */}
        <ChevronUp
          className={isActive ? s.up : s.down}
          // Ajoute un gestionnaire d'événements de clic sur les icônes de chevrons. 
          onClick={handleChevronClick}
        />
      </section>
      {/* Affiche le contenu seulement si l'état est actif. */}
      {isActive ? (
        <div className={s.content} style={style}>
          <p className={s.content_text}>{children}</p>
        </div>
      ) : (
        false
      )}
    </>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
};
