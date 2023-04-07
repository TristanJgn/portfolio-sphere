import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavBar from "../NavBar/NavBar";
import Logo from "../../assets/images/Portfolio-Sphere-Logo.png";
import "./Header.scss";

function Header() {

  const navigate = useNavigate();
  const returnHome = () => {
    navigate("/"); // Take the user to the home page
  };

  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="portfolio sphere logo" onClick={returnHome}/>
      <HamburgerMenu />
      <NavBar />
    </header>
  );
}

export default Header;