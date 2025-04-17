import React from "react";
import style from "./gallery.module.scss";

import galleryImg1 from "../../../assets/images/services/gallery-1.png";
import galleryImg2 from "../../../assets/images/services/gallery-2.png";
import galleryImg3 from "../../../assets/images/services/gallery-3.png";

const Gallery = () => {
  return (
    <section className={style.gallery}>
      <div className="container">
        <div className={style.gallery__wrapper}>
          <ul>
            <li>
              <img src={galleryImg1} alt="постройка" />
            </li>

            <li>
              <img src={galleryImg2} alt="постройка" />
            </li>

            <li>
              <img src={galleryImg3} alt="постройка" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
