import React from "react";
import style from "./head.module.scss";
import { Link } from "react-router-dom";

const Head = ({ head_title, head_text, head_images, handleClick }) => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <div className={style.head__left}>
            <h1>{head_title}</h1>
            <p>{head_text}</p>

            <div className={style.head__buttons}>
              <Link to="/uslugi">Услуги</Link>
              <Link to="#" onClick={() => handleClick()}>
                О компании
              </Link>
            </div>
          </div>

          <div className={style.head__right}>
            <div className={style.head__right__wrapper}>
              {head_images.map((item) => (
                <img
                  src={`${process.env.REACT_APP_STRAPI_URL_IMAGE}${item?.url}`}
                  alt="дом"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
