import React from "react";
import style from "./head.module.scss";
import arrowBottom from "../../../assets/icons/arrow-bottom.svg";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <div className={style.head__top}>
            <h1>Тарифы</h1>
            <p>
              Надёжная система требует не только качественной установки, но и
              регулярного обслуживания. Мы предлагаем несколько тарифных планов,
              чтобы вы могли выбрать оптимальный уровень поддержки — от базовой
              профилактики до круглосуточной технической поддержки.
            </p>

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

              <tr>
                <td>Обслуживание домофонов</td>
                <td>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator.
                </td>
                <td>от 40 руб/ месяц</td>
              </tr>

              <tr>
                <td>Обслуживание домофонов</td>
                <td>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator.
                </td>
                <td>от 40 руб/ месяц</td>
              </tr>

              <tr>
                <td>Обслуживание домофонов</td>
                <td>
                  Reference site about Lorem Ipsum, giving information on its
                  origins, as well as a random Lipsum generator.
                </td>
                <td>от 40 руб/ месяц</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
