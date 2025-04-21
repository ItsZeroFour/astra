import React, { useState, useEffect } from "react";
import style from "./head.module.scss";
import { Link } from "react-router-dom";

const Head = ({ work }) => {
  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    if (work.image?.url) {
      setBgStyle({
        backgroundImage: `url(${process.env.REACT_APP_STRAPI_URL_IMAGE}${work.image.url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      });
    }
  }, [work.image?.url]);

  return (
    <section className={style.head} style={bgStyle}>
      <div className="container">
        <div className={style.head__wrapper}>
          <h1>{work.title}</h1>
          <p>{work.description}</p>

          <p>
            <Link to="/">Главная</Link> /{" "}
            <Link to="/completed-works">Услуги</Link>/ {work.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Head;
