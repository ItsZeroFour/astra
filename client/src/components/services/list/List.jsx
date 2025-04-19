import React from "react";
import style from "./list.module.scss";
import { Link } from "react-router-dom";

const List = ({ services }) => {
  return (
    <section className={style.list}>
      {/* <div className="container"> */}
      <div className={style.list__wrapper}>
        <ul>
          {services.map((item, index) => (
            <li key={item.id} className={index % 2 !== 0 ? style.reversed : ""}>
              <img
                src={`http://localhost:1337${item.image.url}`}
                alt={item.title}
              />

              <div className={style.list__item__text}>
                <h3>{item.title}</h3>
                <p>
                  {" "}
                  {item.description.length > 150
                    ? `${item.description.slice(0, 150)}...`
                    : item.description}
                </p>

                <Link to={`/service/${item.id}`}>Подробнее</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* </div> */}
    </section>
  );
};

export default List;
