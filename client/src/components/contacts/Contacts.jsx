import React from "react";
import style from "./contacts.module.scss";

import location from "../../assets/icons/contacts/location.svg";
import phone from "../../assets/icons/contacts/phone.svg";
import mail from "../../assets/icons/contacts/mail.svg";
import clock from "../../assets/icons/contacts/clock.svg";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <section className={style.contacts}>
      <div className="container">
        <div className={style.contacts__wrapper}>
          <div className={style.contacts__left}>
            <ul>
              <li>
                <img
                  src={location}
                  alt="Адрес: г. Брянск, ул. Пролетарская, д. 1"
                />
                <p>Адрес: г. Брянск, ул. Пролетарская, д. 1</p>
              </li>

              <li>
                <img src={phone} alt="телефон" />
                <p>
                  Телефон:{" "}
                  <Link to="tel:+74832744302"> +7 (4832) 74-43-02</Link>
                </p>
              </li>

              <li>
                <img src={mail} alt="Почта" />
                <p>
                  Email:{" "}
                  <Link to="mailto:info@astrabryansk.ru">
                    info@astrabryansk.ru
                  </Link>
                </p>
              </li>

              <li>
                <img src={clock} alt="Часы" />
                <p>Часы работы: Пн-Пт 9:00–18:00</p>
              </li>
            </ul>
          </div>
          <div className={style.contacts__right}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=34.358880%2C53.241811&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjAwMzE2NhJC0KDQvtGB0YHQuNGPLCDQkdGA0Y_QvdGB0LosINCf0YDQvtC70LXRgtCw0YDRgdC60LDRjyDRg9C70LjRhtCwLCAxIgoNfm8JQhWd91RC&z=17"
              width="750"
              height="400"
              frameborder="1"
              allowfullscreen="true"
              style={{ position: "relative" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
