import { useNavigate } from "react-router-dom";
import MainButton from "../MainButton/MainButton";
import heroImage from "../../assets/images/Hero.png";
import mainHeroImage from "../../assets/images/main-hero.png"
import mainHeroDesktopImage from "../../assets/images/main-hero-desktop.png";
import "./Hero.scss";

function Hero() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/register"); // Take the user to the registration page
  }

  return (
    <section className="hero">
      <div className="hero__left-container">
        <div className="hero__text-container">
          <h1 className="hero__main-text">
            Keep <span className="hero__main-text--special">track of all</span>{" "}
            your cryptocurrency holdings in{" "}
            <span className="hero__main-text--special">one place</span>
          </h1>
          <h2 className="hero__sub-text--tablet">
            Gathering insights into all of your investments has never been
            easier
          </h2>
        </div>
        <div className="hero__sub-image-container">
          <img className="hero__sub-image" src={heroImage} alt="hero circle" />
        </div>
        <h2 className="hero__sub-text">
          <span className="hero__sub-text--special">Gathering insights</span>{" "}
          into all of your investments has{" "}
          <span className="hero__sub-text--special">never been easier</span>
        </h2>
        <MainButton
          buttonText={"Get Started"}
          onClickAction={handleGetStarted}
        />
      </div>
      <div className="hero__main-image-container">
        <img className="hero__main-image" src={mainHeroImage} alt="hero main" />
      </div>
      <div className="hero__main-image-container--desktop">
        <img className="hero__main-image--desktop" src={mainHeroDesktopImage} alt="hero main" />
      </div>
    </section>
  );
}

export default Hero;
