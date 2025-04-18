import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const NotFoud = () => {
  return (
    <section className={style.notfound}>
      <div className="container">
        <div className={style.notfound__wrapper}>
          <h1>404</h1>
          <p>Страница не найдена</p>
          <Link to="/">Домой</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoud;
