import React from "react";
import style from "./list.module.scss";
import { Link } from "react-router-dom";

const List = ({ completedWorks }) => {
  return (
    <section className={style.list}>
      <div className="container">
        <div className={style.list__wrapper}>
          <ul>
            {completedWorks.map((item) => (
              <li key={item.id}>
                <img
                  src={`http://localhost:1337${item.image.url}`}
                  alt={item.title}
                />

                <div className={style.list__main}>
                  <h3>{item.title}</h3>
                  <p>{item.full_description}</p>

                  <Link to={`/work/${item.id}`}>Подробнее</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default List;
