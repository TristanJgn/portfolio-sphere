import { NavLink } from "react-router-dom";
import "./HamburgerMenu.scss";

function HamburgerMenu() {

  return (
    <div className="menu-container">
      <div className="hamburger-menu">
        <span className="hamburger-menu__line"></span>
        <span className="hamburger-menu__line"></span>
        <span className="hamburger-menu__line"></span>
      </div>
      <nav>
        <ul className="menu">
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
