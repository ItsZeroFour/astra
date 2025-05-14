import React from "react";
import style from "./head.module.scss";
import { Link } from "react-router-dom";

const Head = ({ completedWorksItems }) => {
  console.log(completedWorksItems);

  return (
    <section
      className={style.head}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_STRAPI_URL_IMAGE}${completedWorksItems?.image_bg?.url})`,
      }}
    >
      <div className="container">
        <div className={style.head__wrapper}>
          <h1>{completedWorksItems.title}</h1>
          <p>{completedWorksItems.text}</p>

          <p>
            <Link to="/">Главная</Link> / Выполненные работы
          </p>
        </div>
      </div>
    </section>
  );
};

export default Head;
