import React from "react";
import style from "./about.module.scss";

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
  return (
    <section className={style.about} id="about" ref={targetRef}>
      <div className="container">
        <div className={style.about__wrapper}>
          <div className={style.about__top}>
            <div className={style.about__top__left}>
              <h2>{about_title}</h2>
              <p>{about_text}</p>
            </div>

            <div className={style.about__top__right}>
              <img
                src={`http://localhost:1337${about_image.url}`}
                alt="about"
              />
            </div>
          </div>

          <div className={style.about__main}>
            <ul>
              <li className={style.about__main__item}>
                <div className={style.aboutListItemIcon}>
                  <img
                    src={`http://localhost:1337${about_item_1_icon.url}`}
                    alt={about_item_1_title}
                  />
                </div>
                <div className={style.about__main__content}>
                  <h4>{about_item_1_title}</h4>
                  <p>{about_item_1_text}</p>
                </div>
              </li>

              <li className={style.about__main__item}>
                <div className={style.aboutListItemIcon}>
                  <img
                    src={`http://localhost:1337${about_item_2_icon.url}`}
                    alt={about_item_2_title}
                  />
                </div>
                <div className={style.about__main__content}>
                  <h4>{about_item_2_title}</h4>
                  <p>{about_item_2_text}</p>
                </div>
              </li>

              <li className={style.about__main__item}>
                <div className={style.aboutListItemIcon}>
                  <img
                    src={`http://localhost:1337${about_item_3_icon.url}`}
                    alt={about_item_3_title}
                  />
                </div>
                <div className={style.about__main__content}>
                  <h4>{about_item_3_title}</h4>
                  <p>{about_item_3_text}</p>
                </div>
              </li>

              <li className={style.about__main__item}>
                <div className={style.aboutListItemIcon}>
                  <img
                    src={`http://localhost:1337${about_item_4_icon.url}`}
                    alt={about_item_4_title}
                  />
                </div>
                <div className={style.about__main__content}>
                  <h4>{about_item_4_title}</h4>
                  <p>{about_item_4_text}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
