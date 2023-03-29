import heroImage from "../../assets/images/Hero.png"
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__text-container">
        <h1 className="hero__main-text">
          Keep <span className="hero__main-text--special">track of all</span>{" "}
          your cryptocurrency holdings in{" "}
          <span className="hero__main-text--special">one place</span>
        </h1>
        <h2 className="hero__sub-text--tablet">
          Gathering insights into all of your investments has never been easier
        </h2>
      </div>
      <div className="hero__image-container">
        <img className="hero__image" src={heroImage} alt="hero" />
      </div>
      <h2 className="hero__sub-text">
        <span className="hero__sub-text--special">Gathering insights</span> into
        all of your investments has{" "}
        <span className="hero__sub-text--special">
          never been easier
        </span>
      </h2>
    </section>
  );
}

export default Hero;
