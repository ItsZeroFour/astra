import React from "react";
import style from "./other.module.scss";
import arrowRight from "../../../assets/icons/arrow-right-2.svg";
import { Link } from "react-router-dom";

const Other = ({ otherServies }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className={style.other}>
      <div className="container">
        <div className={style.other__wrapper}>
          <h2>Другие услуги</h2>

          <ul>
            {otherServies.map((item) => (
              <li key={item.id}>
                <p>{item.type}</p>
                <h4>{item.title}</h4>
                <Link to={`/${item.url}`} onClick={scrollToTop}>
                  ПОДРОБНЕЕ <img src={arrowRight} alt="ПОДРОБНЕЕ" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Other;
