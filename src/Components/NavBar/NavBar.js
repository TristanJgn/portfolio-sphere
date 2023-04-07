import { NavLink, useNavigate } from "react-router-dom";
import homeIcon from "../../assets/icons/home-white.svg";
import marketsIcon from "../../assets/icons/markets-white.svg";
import portfolioIcon from "../../assets/icons/portfolio-white.svg";
import dashboardIcon from "../../assets/icons/dashboard-white.svg";
import loginIcon from "../../assets/icons/login-white.svg";
import logoutIcon from "../../assets/icons/logout-white.svg";
import "./NavBar.scss";

function NavBar() {
  const navigate = useNavigate();

  if (!sessionStorage.authToken) {
    return (
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink to="/" className="navigation__link">
                <img
                  className="navigation__icon navigation__icon--bigger"
                  src={homeIcon}
                  alt="markets icon"
                />
                <p className="navigation__text">Home</p>
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/markets" className="navigation__link">
                <img
                  className="navigation__icon"
                  src={marketsIcon}
                  alt="markets icon"
                />
                <p className="navigation__text">Markets</p>
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/portfolio" className="navigation__link">
                <img
                  className="navigation__icon navigation__icon--bigger"
                  src={portfolioIcon}
                  alt="portfolio icon"
                />
                <p className="navigation__text">Manage Portfolio</p>
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/dashboard" className="navigation__link">
                <img
                  className="navigation__icon"
                  src={dashboardIcon}
                  alt="dashboard icon"
                />
                <p className="navigation__text">Dashboard</p>
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/login" className="navigation__link">
                <img
                  className="navigation__icon navigation__icon--bigger"
                  src={loginIcon}
                  alt="login icon"
                />
                <p className="navigation__text">Login</p>
              </NavLink>
            </li>
          </ul>
        </nav>
    );
  }

  const handleLogout = () => {
    sessionStorage.removeItem("authToken"); // Clear the JWT token effectively signing out the user
    navigate("/"); // Take the user back home
  };

    return (
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/" className="navigation__link">
              <img
                className="navigation__icon navigation__icon--bigger"
                src={homeIcon}
                alt="markets icon"
              />
              <p className="navigation__text">Home</p>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/markets" className="navigation__link">
              <img
                className="navigation__icon"
                src={marketsIcon}
                alt="markets icon"
              />
              <p className="navigation__text">Markets</p>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/portfolio" className="navigation__link">
              <img
                className="navigation__icon navigation__icon--bigger"
                src={portfolioIcon}
                alt="portfolio icon"
              />
              <p className="navigation__text">Manage Portfolio</p>
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/dashboard" className="navigation__link">
              <img
                className="navigation__icon"
                src={dashboardIcon}
                alt="dashboard icon"
              />
              <p className="navigation__text">Dashboard</p>
            </NavLink>
          </li>
          <li className="navigation__item navigation__item--logout" onClick={handleLogout}>
              <img
                className="navigation__icon navigation__icon--bigger"
                src={logoutIcon}
                alt="logout icon"
              />
              <p className="navigation__text">Logout</p>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar;
