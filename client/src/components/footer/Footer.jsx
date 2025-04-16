import React from "react";
import style from "./footer.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import telegram from "../../assets/icons/footer/telegram.svg";
import vk from "../../assets/icons/footer/vk.svg";
import whatsapp from "../../assets/icons/footer/whatsapp.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <div className={style.footer__left}>
            <img src={logo} alt="Астра" />

            <div className={style.footer__contacts}>
              <Link to="tel:+74832744302">+7 (4832) 74-43-02</Link>
              <Link to="mailto:sale@astrabryansk.ru">sale@astrabryansk.ru</Link>
              <p>Пн-Пт 9:00–18:00</p>
            </div>

            <div className={style.footer__socials}>
              <Link to="" className={style.footer__socials__item}>
                <img src={telegram} alt="telegram" />

                <p>Telegram</p>
              </Link>

              <Link to="" className={style.footer__socials__item}>
                <img src={vk} alt="vk" />

                <p>Вконтакте</p>
              </Link>

              <Link to="" className={style.footer__socials__item}>
                <img src={whatsapp} alt="whatsapp" />

                <p>WhatsApp</p>
              </Link>
            </div>
          </div>

          <div className={style.footer__right}>
            <h3>Информация</h3>

            <nav>
              <ul>
                <li>
                  <Link to="/">О компании</Link>
                </li>

                <li>
                  <Link to="/">Каталог услуг</Link>
                </li>

                <li>
                  <Link to="/">Тарифы</Link>
                </li>

                <li>
                  <Link to="/">Контакты</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
