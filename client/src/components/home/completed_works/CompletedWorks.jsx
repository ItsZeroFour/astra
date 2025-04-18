import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./completedworks.module.scss";
import itemimg1 from "../../../assets/images/completed_works/item-1.png";
import arrowRight from "../../../assets/icons/arrow-right-2.svg";
import { Link } from "react-router-dom";

const CompletedWorks = ({ completedWorks }) => {
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

  return (
    <section className={style.completed_works}>
      <div className="container">
        <div className={style.completed_works__wrapper}>
          <h2>ВЫПОЛНЕННЫЕ РАБОТЫ</h2>

          <Slider {...sliderSettings} className={style.works__slider}>
            {completedWorks.slice(0, 8).map((work) => (
              <div key={work.id} className={style.work__slide}>
                <div className={style.completed_works__item}>
                  <img
                    src={`http://localhost:1337${work.image.url}`}
                    alt={work.title}
                  />
                  <div className={style.completed_works__item__text}>
                    <h4>{work.title}</h4>
                    <p>{work.description}</p>
                  </div>
                  <Link to={`/work/${work.id}`}>
                    ПОДРОБНЕЕ <img src={arrowRight} alt="ПОДРОБНЕЕ" />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>

          <Link to="/completed-works">
            КО ВСЕМ РАБОТАМ <img src={arrowRight} alt="КО ВСЕМ РАБОТАМ" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompletedWorks;
