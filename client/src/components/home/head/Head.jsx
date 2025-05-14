import React from "react";
import style from "./head.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Head = ({ head_title, head_text, head_images, handleClick }) => {
  const titleAnimation = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const imageAnimation = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2, // Задержка для каждого изображения
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <div className={style.head__left}>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
            >
              {head_title}
            </motion.h1>
            <p>{head_text}</p>

            <div className={style.head__buttons}>
              <Link to="/uslugi">Услуги</Link>
              <Link to="#" onClick={() => handleClick()}>
                О компании
              </Link>
            </div>
          </div>

          <div className={style.head__right}>
            <div className={style.head__right__wrapper}>
              {head_images.map((item, index) => (
                <motion.img
                  key={index}
                  src={`${process.env.REACT_APP_STRAPI_URL_IMAGE}${item?.url}`}
                  alt="дом"
                  custom={index} // Передаем индекс для кастомной задержки
                  initial="hidden"
                  animate="visible"
                  variants={imageAnimation}
                  whileHover={{ scale: 1.05 }} // Добавим эффект при наведении
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
