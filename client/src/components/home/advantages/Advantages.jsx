import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./advantages.module.scss";
import advantagesIcon1 from "../../../assets/icons/advantages/advantages-icon-1.svg";
import advantagesIcon2 from "../../../assets/icons/advantages/advantages-icon-2.svg";
import advantagesIcon3 from "../../../assets/icons/advantages/advantages-icon-3.svg";
import advantagesIcon4 from "../../../assets/icons/advantages/advantages-icon-4.svg";
import advantagesIcon5 from "../../../assets/icons/advantages/advantages-icon-5.svg";

import arrowRight from "../../../assets/icons/arrow-right.svg";
import arrowRight2 from "../../../assets/icons/arrow-right-2.svg";
import { Link } from "react-router-dom";

const Advantages = ({ services }) => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    <section className={style.advantages}>
      <div className="container">
        <div className={style.advantages__wrapper}>
          <h2>НАШИ ПРЕИМУЩЕСТВА</h2>

          <ul>
            <li>
              <img src={advantagesIcon1} alt="Комплексный подход" />
              <p>Комплексный подход</p>
            </li>

            <li>
              <img
                src={advantagesIcon2}
                alt="Собственное производство компонетов"
              />
              <p>Собственное производство компонетов</p>
            </li>

            <li>
              <img src={advantagesIcon3} alt="Гибкие конфигурации" />
              <p>Гибкие конфигурации</p>
            </li>

            <li>
              <img src={advantagesIcon4} alt="Гарантия и сервис" />
              <p>Гарантия и сервис</p>
            </li>

            <li>
              <img src={advantagesIcon5} alt='Работаем "на месте"' />
              <p>Работаем "на месте"</p>
            </li>
          </ul>
        </div>

        <div className={style.services__wrapper}>
          <h2>УСЛУГИ</h2>

          <Slider {...sliderSettings} className={style.services__slider}>
            {services.slice(0, 8).map((service) => (
              <div key={service.id} className={style.service__slide}>
                <div
                  className={style.service__item}
                  style={{
                    backgroundImage: `url(http://localhost:1337${service.image.url})`,
                  }}
                >
                  <h3>{service.title}</h3>
                  <p>
                    {service.description.length > 150
                      ? `${service.description.slice(0, 150)}...`
                      : service.description}
                  </p>
                  <Link to={`/service/${service.id}`}>
                    ПОДРОБНЕЕ <img src={arrowRight} alt="Подробнее" />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>

          <Link to={`/services`}>
            КО ВСЕМ УСЛУГАМ <img src={arrowRight2} alt="КО ВСЕМ УСЛУГАМ" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
