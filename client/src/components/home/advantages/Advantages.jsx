import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./advantages.module.scss";

import arrowRight from "../../../assets/icons/arrow-right.svg";
import arrowRight2 from "../../../assets/icons/arrow-right-2.svg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Advantages = ({
  services,

  advantages_title,

  advantages_item_1_text,
  advantages_item_1_icon,

  advantages_item_2_text,
  advantages_item_2_icon,

  advantages_item_3_text,
  advantages_item_3_icon,

  advantages_item_4_text,
  advantages_item_4_icon,

  advantages_item_5_text,
  advantages_item_5_icon,
}) => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  // Анимация для элементов списка преимуществ
  const listItemAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  // Анимация для заголовка
  const titleAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Анимация для контейнера списка
  const listAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Создаем массив элементов преимуществ для удобного маппинга
  const advantageItems = [
    { text: advantages_item_1_text, icon: advantages_item_1_icon },
    { text: advantages_item_2_text, icon: advantages_item_2_icon },
    { text: advantages_item_3_text, icon: advantages_item_3_icon },
    { text: advantages_item_4_text, icon: advantages_item_4_icon },
    { text: advantages_item_5_text, icon: advantages_item_5_icon },
  ];

  return (
    <section className={style.advantages}>
      <div className="container">
        <div className={style.advantages__wrapper}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={titleAnimation}
          >
            {advantages_title}
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={listAnimation}
          >
            {advantageItems.map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={listItemAnimation}
                whileHover="hover"
              >
                <img
                  src={`${process.env.REACT_APP_STRAPI_URL_IMAGE}${item.icon?.url}`}
                  alt={item.text}
                />
                <p>{item.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className={style.services__wrapper}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={titleAnimation}
          >
            УСЛУГИ
          </motion.h2>

          <Slider {...sliderSettings} className={style.services__slider}>
            {services.slice(0, 8).map((service) => (
              <Link
                to={`/${service.url}`}
                key={service.id}
                className={style.service__slide}
              >
                <div
                  className={style.service__item}
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_STRAPI_URL_IMAGE}${service?.image?.url})`,
                  }}
                >
                  <h3>{service.title}</h3>
                  <p>
                    {service.description.length > 150
                      ? `${service.description.slice(0, 150)}...`
                      : service.description}
                  </p>
                  <Link to={`/${service.url}`}>
                    ПОДРОБНЕЕ <img src={arrowRight} alt="Подробнее" />
                  </Link>
                </div>
              </Link>
            ))}
          </Slider>

          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            className={style.service__link}
          >
            <Link to={`/uslugi`}>
              КО ВСЕМ УСЛУГАМ <img src={arrowRight2} alt="КО ВСЕМ УСЛУГАМ" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
