import React from "react";
import style from "./head.module.scss";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <h1>Выполненные работы</h1>
          <p>
            Мы предоставляем полный спектр решений в сфере безопасности и
            инженерных систем. Проектируем, устанавливаем и обслуживаем
            оборудование под ключ — от частных домов до промышленных объектов.
            Каждую задачу решаем с учётом специфики объекта, нормативных
            требований и пожеланий клиента.
          </p>

          <p>Главная / Выполненные работы</p>
        </div>
      </div>
    </section>
  );
};

export default Head;
