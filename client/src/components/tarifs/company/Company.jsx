import React from "react";
import style from "./company.module.scss";
import figure from "../../../assets/images/about/figure.svg";

const Company = ({ tarifs }) => {
  return (
    <section className={style.company}>
      <div className="container">
        <div className={style.company__wrapper}>
          <div className={style.company__left}>
            <img src={figure} alt="figure" />
          </div>
          <div className={style.company__right}>
            <h2>{tarifs.about_title}</h2>
            <p>{tarifs.about_text}</p>

            <ul>
              <li>
                <p>{tarifs.about_advantages_1}</p>
              </li>

              <li>
                <p>{tarifs.about_advantages_2}</p>
              </li>

              <li>
                <p>{tarifs.about_advantages_3}</p>
              </li>

              <li>
                <p>{tarifs.about_advantages_4}</p>
              </li>

              <li>
                <p>{tarifs.about_advantages_5}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
