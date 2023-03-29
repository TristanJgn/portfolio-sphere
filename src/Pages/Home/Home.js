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
      <FeatureCard icon={marketsIcon} featureTitle={"Markets"} featureDescription={"View real-time price data of the cryptocurrency market"}/>
    </main>
  );
}

export default Home;
