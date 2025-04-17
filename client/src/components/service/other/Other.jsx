import React from "react";
import style from "./other.module.scss";
import arrowRight from "../../../assets/icons/arrow-right-2.svg";
import { Link } from "react-router-dom";

const Other = () => {
  return (
    <section className={style.other}>
      <div className="container">
        <div className={style.other__wrapper}>
          <h2>Другие услуги</h2>

          <ul>
            <li>
              <p>СИМСТЕМА БЕЗОПАСНОСТИ</p>
              <h4>Проектирование противопожарных систем</h4>
              <Link>
                ПОДРОБНЕЕ <img src={arrowRight} alt="ПОДРОБНЕЕ" />
              </Link>
            </li>

            <li>
              <p>СИМСТЕМА БЕЗОПАСНОСТИ</p>
              <h4>Проектирование противопожарных систем</h4>
              <Link>
                ПОДРОБНЕЕ <img src={arrowRight} alt="ПОДРОБНЕЕ" />
              </Link>
            </li>

            <li>
              <p>СИМСТЕМА БЕЗОПАСНОСТИ</p>
              <h4>Проектирование противопожарных систем</h4>
              <Link>
                ПОДРОБНЕЕ <img src={arrowRight} alt="ПОДРОБНЕЕ" />
              </Link>
            </li>

            <li>
              <p>СИМСТЕМА БЕЗОПАСНОСТИ</p>
              <h4>Проектирование противопожарных систем</h4>
              <Link>
                ПОДРОБНЕЕ <img src={arrowRight} alt="ПОДРОБНЕЕ" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Other;
