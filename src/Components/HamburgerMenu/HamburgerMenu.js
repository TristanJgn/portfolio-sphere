import { useState } from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/icons/home.svg";
import marketsIcon from "../../assets/icons/markets.svg"
import portfolioIcon from "../../assets/icons/portfolio.svg"
import dashboardIcon from "../../assets/icons/dashboard.svg";
import loginIcon from "../../assets/icons/login.svg";
import "./HamburgerMenu.scss";

function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <div className={`menu-container`} onClick={toggleActive}>
      <div
        className={`hamburger-menu ${isActive ? "hamburger-menu--active" : ""}`}
      >
        <span
          className={`hamburger-menu__line ${
            isActive ? "hamburger-menu__line--active" : ""
          }`}
        ></span>
        <span
          className={`hamburger-menu__line ${
            isActive ? "hamburger-menu__line--active" : ""
          }`}
        ></span>
        <span
          className={`hamburger-menu__line ${
            isActive ? "hamburger-menu__line--active" : ""
          }`}
        ></span>
      </div>
      <nav>
        <ul className={`menu ${isActive ? "menu--active" : ""}`}>
          <li className="menu__item">
            <NavLink to="/" className="menu__link">
              <img
                className="menu__icon menu__icon--bigger"
                src={homeIcon}
                alt="markets icon"
              />
              <p className="menu__text">Home</p>
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/markets" className="menu__link">
              <img
                className="menu__icon"
                src={marketsIcon}
                alt="markets icon"
              />
              <p className="menu__text">Markets</p>
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/portfolio" className="menu__link">
              <img
                className="menu__icon menu__icon--bigger"
                src={portfolioIcon}
                alt="portfolio icon"
              />
              <p className="menu__text">Manage Portfolio</p>
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/dashboard" className="menu__link">
              <img
                className="menu__icon"
                src={dashboardIcon}
                alt="dashboard icon"
              />
              <p className="menu__text">Dashboard</p>
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/login" className="menu__link">
              <img
                className="menu__icon menu__icon--bigger"
                src={loginIcon}
                alt="login icon"
              />
              <p className="menu__text">Login</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
