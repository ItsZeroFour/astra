import React from "react";
import style from "./head.module.scss";
import { Link } from "react-router-dom";

const Head = ({ servicesItems }) => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <h1>{servicesItems.title}</h1>
          <p>{servicesItems.text}</p>

          <p>
            <Link to="/">Главная</Link> / Услуги
          </p>
        </div>
      </div>
    </section>
  );
};

export default Head;
