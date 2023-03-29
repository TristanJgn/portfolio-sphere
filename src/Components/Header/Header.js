import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../../assets/images/Portfolio-Sphere-Logo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="portfolio sphere logo" />
      <HamburgerMenu />
    </header>
  );
}

export default Header;