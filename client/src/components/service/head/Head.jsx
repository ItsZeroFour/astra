import React, { useState, useEffect } from "react";
import style from "./head.module.scss";
import { Link } from "react-router-dom";

const Head = ({ service }) => {
  const [bgStyle, setBgStyle] = useState({});

  useEffect(() => {
    if (service.image?.url) {
      setBgStyle({
        backgroundImage: `url(${process.env.REACT_APP_STRAPI_URL_IMAGE}${service.image.url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      });
    }
  }, [service.image?.url]);

  return (
    <section className={style.head} style={bgStyle}>
      <div className="container">
        <div className={style.head__wrapper}>
          <h1>{service.title}</h1>
          <p>{service.description}</p>

          <p>
            <Link to="/">Главная</Link> / <Link to="/uslugi">Услуги</Link>/{" "}
            {service.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Head;
