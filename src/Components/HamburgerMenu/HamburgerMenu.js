import { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/markets" className="menu__link">
              Markets
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/portfolio" className="menu__link">
              Manage Portfolio
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/dashboard" className="menu__link">
              Dashboard
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/login" className="menu__link">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
