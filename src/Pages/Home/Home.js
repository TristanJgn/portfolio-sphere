import FeatureCard from "../../Components/FeatureCard/FeatureCard";
import Hero from "../../Components/Hero/Hero";
import marketsIcon from "../../assets/icons/markets.svg";
import portfolioIcon from "../../assets/icons/portfolio.svg";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import "./Home.scss";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <div className="home-page__feature-cards-container">
        <FeatureCard
          icon={marketsIcon}
          featureTitle={"Markets"}
          featureDescription={
            "View real-time price data of the cryptocurrency market"
          }
        />
        <FeatureCard
          icon={portfolioIcon}
          featureTitle={"Manage Portfolio"}
          featureDescription={
            "Update your portfolio holdings when you buy or sell investments. This way, Portfolio Sphere can kee your portfolio up to date"
          }
        />
        <FeatureCard
          icon={dashboardIcon}
          featureTitle={"Dashboard"}
          featureDescription={
            "Valuable insights into your portfolio. View the allocation of your portfolio among your top holdings and the total value of your investments"
          }
        />
      </div>
    </main>
  );
}

export default Home;
