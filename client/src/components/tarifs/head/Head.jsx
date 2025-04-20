import React from "react";
import style from "./head.module.scss";
import arrowBottom from "../../../assets/icons/arrow-bottom.svg";
import { Link } from "react-router-dom";

const Head = ({ tarifs, listOfTarifs }) => {
  console.log(listOfTarifs);

  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <div className={style.head__top}>
            <h1>{tarifs.title}</h1>
            <p>{tarifs.text}</p>

            <Link to="/">
              <img src={arrowBottom} alt="arrow" />
            </Link>
          </div>

          <div className={style.head__table}>
            <table>
              <tr>
                <th>Наименивание</th>
                <th>Описание</th>
                <th>Цена</th>
              </tr>

              {listOfTarifs.map((item) => (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.text}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
