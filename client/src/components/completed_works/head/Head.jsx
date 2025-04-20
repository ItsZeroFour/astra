import React from "react";
import style from "./head.module.scss";

const Head = ({ completedWorksItems }) => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <h1>{completedWorksItems.title}</h1>
          <p>{completedWorksItems.text}</p>

          <p>Главная / Выполненные работы</p>
        </div>
      </div>
    </section>
  );
};

export default Head;
