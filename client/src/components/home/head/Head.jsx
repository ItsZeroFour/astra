import React from "react";
import style from "./head.module.scss";
import { Link } from "react-router-dom";

import rightImg1 from "../../../assets/images/head/right-img-1.png";
import rightImg2 from "../../../assets/images/head/right-img-2.png";
import rightImg3 from "../../../assets/images/head/right-img-3.png";
import rightImg4 from "../../../assets/images/head/right-img-4.png";
import rightImg5 from "../../../assets/images/head/right-img-5.png";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <div className={style.head__left}>
            <h1>Системы безопасности под ключ в Брянске</h1>
            <p>
              Проектируем, монтируем и обслуживаем охранные системы, домофоны,
              видеонаблюдение. Также изготавливаем металлоконструкции и двери
            </p>

            <div className={style.head__buttons}>
              <Link to="/">Услуги</Link>
              <Link to="/">О компании</Link>
            </div>
          </div>

          <div className={style.head__right}>
            <div className={style.head__right__wrapper}>
              <img src={rightImg1} alt="дом" />
              <img src={rightImg2} alt="дом" />
              <img src={rightImg3} alt="дом" />
              <img src={rightImg4} alt="дом" />
              <img src={rightImg5} alt="дом" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
