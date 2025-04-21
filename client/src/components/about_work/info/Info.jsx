import React from "react";
import style from "./info.module.scss";
import figure from "../../../assets/images/about/figure.svg";

const Info = ({ work }) => {
  return (
    <section className={style.info}>
      <div className="container">
        <div className={style.info__wrapper}>
          <div className={style.info__left}>
            <h3>{work.title_about}</h3>

            <p>{work.text_about}</p>
          </div>

          <div className={style.info__right}>
            <img src={figure} alt="figure" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
