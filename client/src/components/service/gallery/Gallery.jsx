import React from "react";
import style from "./gallery.module.scss";

const Gallery = ({ service }) => {
  console.log(service);

  return (
    <section className={style.gallery}>
      <div className="container">
        <div className={style.gallery__wrapper}>
          <ul>
            {service.images.map((item) => (
              <li>
                <img
                  src={`${process.env.REACT_APP_STRAPI_URL}${item.url}`}
                  alt="выполненная работа"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
