import React from "react";
import style from "./footer.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import telegram from "../../assets/icons/footer/telegram.svg";
import vk from "../../assets/icons/footer/vk.svg";
import whatsapp from "../../assets/icons/footer/whatsapp.svg";

const Footer = ({ contacts, handleClick }) => {
  const formatPhoneNumber = (phone) => {
    if (!phone) return "";

    const cleaned = ("" + phone).replace(/\D/g, "");

    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

    if (match) {
      return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    }

    return phone;
  };

  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__wrapper}>
          <div className={style.footer__left}>
            <img
              src={`${process.env.REACT_APP_STRAPI_URL}${contacts?.logo.url}`}
              alt="Астра"
            />

            <div className={style.footer__contacts}>
              <Link to={`tel:${contacts.phone}`}>
                {formatPhoneNumber(contacts.phone)}
              </Link>
              <Link to={`mailto:${contacts.mail}`}>{contacts.mail}</Link>
              <p>{contacts.time}</p>
            </div>

            <div className={style.footer__socials}>
              <Link
                to={contacts.telegram_link}
                className={style.footer__socials__item}
              >
                <img src={telegram} alt="telegram" />

                <p>Telegram</p>
              </Link>

              <Link
                to={contacts.vk_link}
                className={style.footer__socials__item}
              >
                <img src={vk} alt="vk" />

                <p>Вконтакте</p>
              </Link>

              <Link
                to={contacts.whatsapp_link}
                className={style.footer__socials__item}
              >
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
                  <Link to="/" onClick={() => handleClick()}>
                    О компании
                  </Link>
                </li>

                <li>
                  <Link to="/services">Каталог услуг</Link>
                </li>

                <li>
                  <Link to="/tarifs">Тарифы</Link>
                </li>

                <li>
                  <Link to="/contacts">Контакты</Link>
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
