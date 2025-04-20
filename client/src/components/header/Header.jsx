import React, { useState, useEffect } from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import angleDown from "../../assets/icons/angle-down.svg";
import angleDown2 from "../../assets/icons/angle-down-2.svg";

const Header = ({ services, logo, handleClick }) => {
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
            <img src={`http://localhost:1337${logo}`} alt="лого астра" />
          </Link>

          <nav>
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    handleClick();
                    setOpenMenu(false);
                  }}
                >
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
                      {services.map((item) => (
                        <li>
                          <Link
                            to={`/service/${item.id}`}
                            onClick={() => setOpenMenu(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
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
                  <Link
                    to="/"
                    onClick={() => {
                      handleClick();
                      setOpenMenu(false);
                    }}
                  >
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
                      {services.map((item) => (
                        <li>
                          <Link
                            to={`/service/${item.id}`}
                            onClick={() => setOpenMenu(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
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
