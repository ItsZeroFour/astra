import React from "react";
import style from "./contacts.module.scss";

import location from "../../assets/icons/contacts/location.svg";
import phone from "../../assets/icons/contacts/phone.svg";
import mail from "../../assets/icons/contacts/mail.svg";
import clock from "../../assets/icons/contacts/clock.svg";
import { Link } from "react-router-dom";

const Contacts = ({ contacts }) => {
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
    <section className={style.contacts}>
      <div className="container">
        <div className={style.contacts__wrapper}>
          <div className={style.contacts__left}>
            <ul>
              <li>
                <img src={location} alt={`Адрес: ${contacts.address}`} />
                <p>Адрес: {contacts.address}</p>
              </li>

              <li>
                <img src={phone} alt="телефон" />
                <p>
                  Телефон:{" "}
                  <Link to={`tel:${contacts.phone}`}>
                    {formatPhoneNumber(contacts.phone)}
                  </Link>
                </p>
              </li>

              <li>
                <img src={mail} alt="Почта" />
                <p>
                  Email:{" "}
                  <Link to={`mailto:${contacts.mail}`}>{contacts.mail}</Link>
                </p>
              </li>

              <li>
                <img src={clock} alt="Часы" />
                <p>Часы работы: {contacts.time}</p>
              </li>
            </ul>
          </div>
          <div className={style.contacts__right}>
            <iframe
              src={contacts.map_link}
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
