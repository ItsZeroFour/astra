import React from "react";
import style from "./head.module.scss";
import headImg from "../../../assets/images/services/head.png";

const Head = () => {
  return (
    <section
      className={style.head}
      style={{
        background: `url(${headImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className={style.head__wrapper}>
          <h1>Видеонаблюдение</h1>
          <p>
            Наблюдение онлайн, архивирование видеоданных, видеоаналитика с
            помощью CCTV систем высокой четкости
          </p>

          <p>Главная / Услуги/ Видеонаблюдение</p>
        </div>
      </div>
    </section>
  );
};

export default Head;
