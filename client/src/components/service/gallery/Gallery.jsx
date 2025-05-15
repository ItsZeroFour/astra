import React from "react";
import style from "./gallery.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = ({ service }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Включаем автопрокрутку
    autoplaySpeed: 3000, // Интервал между переключениями (в миллисекундах)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={style.gallery}>
      <div className="container">
        <div className={style.gallery__wrapper}>
          <Slider {...sliderSettings} className={style.works__slider}>
            {service.images.map((item) => (
              <div className={style.completed_works__item}>
                <li>
                  <img
                    src={`${process.env.REACT_APP_STRAPI_URL_IMAGE}${item?.url}`}
                    alt="выполненная работа"
                  />
                </li>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
