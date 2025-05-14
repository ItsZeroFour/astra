import React from "react";
import style from "./about.module.scss";
import { motion } from "framer-motion";

const About = ({
  about_title,
  about_text,
  about_image,
  about_item_1_title,
  about_item_1_text,
  about_item_1_icon,

  about_item_2_title,
  about_item_2_text,
  about_item_2_icon,

  about_item_3_title,
  about_item_3_text,
  about_item_3_icon,

  about_item_4_title,
  about_item_4_text,
  about_item_4_icon,

  targetRef,
}) => {
  const itemAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  // Анимация для заголовка секции
  const titleAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Анимация для изображения
  const imageAnimation = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  const aboutItems = [
    {
      title: about_item_1_title,
      text: about_item_1_text,
      icon: about_item_1_icon,
    },
    {
      title: about_item_2_title,
      text: about_item_2_text,
      icon: about_item_2_icon,
    },
    {
      title: about_item_3_title,
      text: about_item_3_text,
      icon: about_item_3_icon,
    },
    {
      title: about_item_4_title,
      text: about_item_4_text,
      icon: about_item_4_icon,
    },
  ];

  return (
    <section className={style.about} id="about" ref={targetRef}>
      <div className="container">
        <div className={style.about__wrapper}>
          <div className={style.about__top}>
            <motion.div
              className={style.about__top__left}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={titleAnimation}
            >
              <h2>{about_title}</h2>
              <p>{about_text}</p>
            </motion.div>

            <motion.div
              className={style.about__top__right}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageAnimation}
            >
              <img
                src={`${process.env.REACT_APP_STRAPI_URL_IMAGE}${about_image?.url}`}
                alt="about"
              />
            </motion.div>
          </div>

          <div className={style.about__main}>
            <ul>
              {aboutItems.map((item, index) => (
                <motion.li
                  key={index}
                  className={style.about__main__item}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={itemAnimation}
                >
                  <div className={style.aboutListItemIcon}>
                    <img
                      src={`${process.env.REACT_APP_STRAPI_URL_IMAGE}${item.icon?.url}`}
                      alt={item.title}
                    />
                  </div>
                  <div className={style.about__main__content}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
