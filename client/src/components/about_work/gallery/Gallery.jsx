import React from "react";
import style from "./gallery.module.scss";

import galleryImg1 from "../../../assets/images/services/gallery-1.png";
import galleryImg2 from "../../../assets/images/services/gallery-2.png";
import galleryImg3 from "../../../assets/images/services/gallery-3.png";

const Gallery = ({ work }) => {
  return (
    <section className={style.gallery}>
      <div className="container">
        <div className={style.gallery__wrapper}>
          <ul>
            {work.images.map((item) => (
              <li>
                <img
                  src={`http://localhost:1337${item.url}`}
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
