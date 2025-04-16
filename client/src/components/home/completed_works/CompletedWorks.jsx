import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./completedworks.module.scss";
import itemimg1 from "../../../assets/images/completed_works/item-1.png";
import arrowRight from "../../../assets/icons/arrow-right-2.svg";
import { Link } from "react-router-dom";

const CompletedWorks = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  // Completed works data
  const works = [
    {
      id: 1,
      title: "Офис, монтаж видеонаблюдения",
      description:
        "«Установлено 8 камер HikVision, DVR-регистратор, работа заняла 2 дня»",
      image: itemimg1,
      link: "/",
    },
    {
      id: 2,
      title: "Магазин, система безопасности",
      description:
        "«Установлена охранная сигнализация и система контроля доступа»",
      image: itemimg1,
      link: "/",
    },
    {
      id: 3,
      title: "Склад, комплексная защита",
      description:
        "«Развернута система видеонаблюдения и пожарной сигнализации»",
      image: itemimg1,
      link: "/",
    },
    {
      id: 4,
      title: "Бизнес-центр, система контроля",
      description: "«Установлены турникеты и система распознавания лиц»",
      image: itemimg1,
      link: "/",
    },
  ];

  return (
    <section className={style.completed_works}>
      <div className="container">
        <div className={style.completed_works__wrapper}>
          <h2>ВЫПОЛНЕННЫЕ РАБОТЫ</h2>

          <Slider {...sliderSettings} className={style.works__slider}>
            {works.map((work) => (
              <div key={work.id} className={style.work__slide}>
                <div className={style.completed_works__item}>
                  <img src={work.image} alt={work.title} />
                  <div className={style.completed_works__item__text}>
                    <h4>{work.title}</h4>
                    <p>{work.description}</p>
                  </div>
                  <Link to={work.link}>
                    ПОДРОБНЕЕ <img src={arrowRight} alt="ПОДРОБНЕЕ" />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>

          <Link to="/">
            КО ВСЕМ РАБОТАМ <img src={arrowRight} alt="КО ВСЕМ РАБОТАМ" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompletedWorks;
