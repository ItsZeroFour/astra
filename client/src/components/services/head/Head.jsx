import React from "react";
import style from "./head.module.scss";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <h1>Каталог услуг</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            laudantium accusamus dicta perspiciatis id. Sequi iure ullam
            sapiente doloremque? Nulla voluptatum laborum fugit vero ex soluta
            vel eaque, nam blanditiis facilis laudantium quos placeat excepturi
            aliquid, nobis, similique expedita quisquam ducimus sunt dolorum
            voluptate! Vel a unde aut. Ad, minima.
          </p>

          <p>Главная / Услуги</p>
        </div>
      </div>
    </section>
  );
};

export default Head;
