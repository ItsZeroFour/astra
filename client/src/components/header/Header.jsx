import React, { useState } from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import angleDown from "../../assets/icons/angle-down.svg";

const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsCatalogOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCatalogOpen(false);
  };

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          <Link to="/">
            <img src={logo} alt="лого астра" />
          </Link>

          <nav>
            <ul>
              <li>
                <Link to="/">О КОМПАНИИ</Link>
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
                        <Link to="/">Системы безопасности</Link>
                      </li>

                      <li>
                        <Link to="/">Автоматика</Link>
                      </li>

                      <li>
                        <Link to="/">Двери</Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link to="/">ТАРИФЫ</Link>
              </li>

              <li>
                <Link to="/">КОНТАКТЫ</Link>
              </li>
            </ul>
          </nav>

          <div />
        </div>
      </div>
    </header>
  );
};

export default Header;
