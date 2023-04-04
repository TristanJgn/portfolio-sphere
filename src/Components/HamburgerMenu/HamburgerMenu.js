import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import homeIcon from "../../assets/icons/home-white.svg";
import marketsIcon from "../../assets/icons/markets-white.svg"
import portfolioIcon from "../../assets/icons/portfolio-white.svg"
import dashboardIcon from "../../assets/icons/dashboard-white.svg";
import loginIcon from "../../assets/icons/login-white.svg";
import logoutIcon from "../../assets/icons/logout-white.svg"
import "./HamburgerMenu.scss";

function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const toggleActive = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  if (!sessionStorage.authToken) {
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

  const handleLogout = () => {
    sessionStorage.removeItem("authToken"); // Clear the JWT token effectively signing out the user
    navigate("/"); // Take the user back home
  }

  return (
    <div className={`menu-container`} onClick={toggleActive}>
      <div
        className={`hamburger-menu ${
          isActive ? "hamburger-menu--active" : ""
        }`}
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
          <li className="menu__item menu__item--logout" onClick={handleLogout}>
              <img
                className="menu__icon menu__icon--bigger"
                src={logoutIcon}
                alt="logout icon"
              />
              <p className="menu__text">Logout</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
