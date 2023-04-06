import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  roundedDollarFormat,
  percentageFormat,
} from "../../Utils/NumberFormatting";
import MainButton from "../../Components/MainButton/MainButton";
import DashboardTable from "../../Components/DashboardTable/DashboardTable";
import dollarIcon from "../../assets/icons/portfolio.svg"
import numHoldingsIcon from "../../assets/icons/coins.svg"
import topHoldingIcon from "../../assets/icons/coin-stack.svg"
import percentChangeIcon from "../../assets/icons/circle-of-arrows.svg"
import "./Dashboard.scss";


function Dashboard() {
  const [dashboardInfo, setDashboardInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jwtToken = sessionStorage.authToken;
    if (!jwtToken) {
      return;
    }

    axios
      .get("http://localhost:8080/dashboard", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setDashboardInfo(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        return <h2>{error.message}</h2>;
      });
  }, []);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login"); // Take the user to the login page
  };

  if (!sessionStorage.authToken) {
    return (
      <main className="dashboard-page">
        <h1 className="dashboard-page__title">
          You must be logged in to view your dashboard.
        </h1>
        <div className="dashboard-page__button-container">
          <MainButton buttonText={"Login"} onClickAction={handleLogin} />
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="dashboard-page">
        <h2 className="dashboard-page__title">Generating insights...</h2>
      </main>
    );
  }

  // Add market value to the objects (price * coin amount)
  const dashboardInfoWithMarketValues = dashboardInfo.map((coin) => {
    return {
      ...coin, 
      market_value: coin.price * coin.coin_amount,
    };
  });

  // Sort the array in descending order based on market values
  dashboardInfoWithMarketValues.sort(function (a, b) {
    const marketValue1 = a.market_value,
      marketValue2 = b.market_value;
    if (marketValue1 > marketValue2) return -1;
    if (marketValue1 < marketValue2) return 1;
    return 0;
  });

  // Calculate the total portfolio value
  const marketValuesArray = dashboardInfoWithMarketValues.map(
    (holding) => holding.market_value
  );
  const totalPortfolioValue = marketValuesArray.reduce((a, b) => a + b);

  // Add percent of portfolio to the objects (market value / total portfolio value)
  const finalDashboardInfo = dashboardInfoWithMarketValues.map((coin) => {
    return {
      ...coin,
      portfolio_percent: coin.market_value / totalPortfolioValue,
    };
  });

  // Find 24h % change of portfolio using market change for each coin and the weight of the holding in the portfolio
  function portfolioChange() {
    let weightedValueSum = 0;

    for (let i = 0; i < finalDashboardInfo.length; i++) {
      const weightedValue = finalDashboardInfo[i].portfolio_percent * finalDashboardInfo[i].percent_change_24h;
      weightedValueSum += weightedValue;
    }

    return weightedValueSum;
  }

  const portfolioChange24h = portfolioChange();

  return (
    <main className="dashboard-page">
      <h1 className="dashboard-page__title">Dashboard</h1>
      <div className="dashboard-card-main-container">
        <div className="dashboard-card-container">
          <div className="dashboard-card">
            <div className="dashboard-card__heading-container">
              <h2 className="dashboard-card__title">Portfolio Value</h2>
              <img
                src={dollarIcon}
                alt="portfolio value icon"
                className="dashboard-card__icon"
              />
            </div>
            <p className="dashboard-card__description">
              {roundedDollarFormat(totalPortfolioValue)}
            </p>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card__heading-container">
              <h2 className="dashboard-card__title">Number of Holdings</h2>
              <img
                src={numHoldingsIcon}
                alt="number of holdings icon"
                className="dashboard-card__icon"
              />
            </div>
            <p className="dashboard-card__description">
              {finalDashboardInfo.length}
            </p>
          </div>
        </div>
        <div className="dashboard-card-container">
          <div className="dashboard-card">
            <div className="dashboard-card__heading-container">
              <h2 className="dashboard-card__title">Top Holding</h2>
              <img
                src={topHoldingIcon}
                alt="top holding icon"
                className="dashboard-card__icon"
              />
            </div>
            <p className="dashboard-card__description">
              {`${finalDashboardInfo[0].coin_amount * 1} ${
                finalDashboardInfo[0].symbol
              } (${roundedDollarFormat(finalDashboardInfo[0].market_value)})`}
            </p>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card__heading-container">
              <h2 className="dashboard-card__title">24h Change</h2>
              <img
                src={percentChangeIcon}
                alt="percent change icon"
                className="dashboard-card__icon--smaller"
              />
            </div>
            <p
              className={`dashboard-card__description ${
                portfolioChange > 0
                  ? "dashboard-card__description--positive"
                  : "dashboard-card__description--negative"
              }`}
            >
              {percentageFormat(portfolioChange24h)}
            </p>
          </div>
        </div>
      </div>
      <DashboardTable finalDashboardInfo={finalDashboardInfo} />
    </main>
  );
}

export default Dashboard;
