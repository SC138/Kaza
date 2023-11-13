import s from "./style.module.css";
import { ChevronUp } from "react-bootstrap-icons";
import { useState } from "react";
import PropTypes from "prop-types";

export function Collapse({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => setIsActive(!isActive);

  return (
    <>
      <section className={s.element}>
        <h2 className={s.title} onClick={() => toggle()}>
          {title}
        </h2>
        <ChevronUp className={isActive ? s.up : s.down} />
      </section>
      {isActive ? (
        <div className={s.content}>
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
  children: PropTypes.string,
};
