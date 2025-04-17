import React from "react";
import style from "./company.module.scss";
import figure from "../../../assets/images/about/figure.svg";

const Company = () => {
  return (
    <section className={style.company}>
      <div className="container">
        <div className={style.company__wrapper}>
          <div className={style.company__left}>
            <img src={figure} alt="figure" />
          </div>
          <div className={style.company__right}>
            <h2>Наша компания</h2>
            <p>
              Наша компания осуществляет проектирование систем вентиляции в кафе
              и подбор оборудования, а так же монтаж системы на объекте, ее
              послегарантийное обслуживание и необходимый ремонт. Мы успешно
              выполняем заказы любой сложности, а комплексная работа является
              залогом качества и экономичности проекта.
            </p>

            <ul>
              <li>
                <p>Комплексный подход</p>
              </li>

              <li>
                <p>Собственное производство</p>
              </li>

              <li>
                <p>Гибкие конфигурации</p>
              </li>

              <li>
                <p>Гарантия и сервис</p>
              </li>

              <li>
                <p>Работаем "на месте"</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
