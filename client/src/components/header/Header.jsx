import React, { useState, useEffect } from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import angleDown from "../../assets/icons/angle-down.svg";
import angleDown2 from "../../assets/icons/angle-down-2.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [openMenuServices, setOpenMenuServices] = useState(false);

  const handleMouseEnter = () => {
    setIsCatalogOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCatalogOpen(false);
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          <Link to="/" onClick={() => setOpenMenu(false)}>
            <img src={logo} alt="лого астра" />
          </Link>

          <nav>
            <ul>
              <li>
                <Link to="/" onClick={() => setOpenMenu(false)}>
                  О КОМПАНИИ
                </Link>
              </li>

              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button>
                  КАТАЛОГ УСЛУГ <img src={angleDown} alt="angle" />
                </button>

                <AnimatePresence>
                  {isCatalogOpen && (
                    <motion.ul
                      className={style.dropdown}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <li>
                        <Link to="/service" onClick={() => setOpenMenu(false)}>
                          Проектирование систем безопасности
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Видеонаблюдение
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Системы контроля доступа
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Электромонтаж
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Локально-вычислительные системы
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Пожарная и охранная сигнализация
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          системы оповещения
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          системы вентилляции
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Техническое обслуживание
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Изготовление металлоконструкций
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link to="/tarifs" onClick={() => setOpenMenu(false)}>
                  ТАРИФЫ
                </Link>
              </li>

              <li>
                <Link to="/contacts" onClick={() => setOpenMenu(false)}>
                  КОНТАКТЫ
                </Link>
              </li>
            </ul>
          </nav>

          <div />

          <button
            className={`${style.header__menu} ${openMenu ? style.active : ""}`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div></div>
          </button>
        </div>

        {openMenu && (
          <div className={style.header__menu__wrapper}>
            <nav>
              <ul>
                <li>
                  <Link to="/" onClick={() => setOpenMenu(false)}>
                    О КОМПАНИИ
                  </Link>
                </li>

                <li>
                  <button
                    onClick={() => setOpenMenuServices(!openMenuServices)}
                  >
                    КАТАЛОГ УСЛУГ <img src={angleDown2} alt="angle" />
                  </button>

                  {openMenuServices && (
                    <ul>
                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Проектирование систем безопасности
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Видеонаблюдение
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Системы контроля доступа
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Электромонтаж
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Локально-вычислительные системы
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Пожарная и охранная сигнализация
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Cистемы оповещения
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Cистемы вентилляции
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Техническое обслуживание
                        </Link>
                      </li>

                      <li>
                        <Link to="/" onClick={() => setOpenMenu(false)}>
                          Изготовление металлоконструкций
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link to="/tarifs" onClick={() => setOpenMenu(false)}>
                    ТАРИФЫ
                  </Link>
                </li>

                <li>
                  <Link to="/contacts" onClick={() => setOpenMenu(false)}>
                    КОНТАКТЫ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
