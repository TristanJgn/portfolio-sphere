import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MainButton from "../../Components/MainButton/MainButton";
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
        <MainButton buttonText={"Login"} onClickAction={handleLogin} />
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
    const newList = {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      price: coin.price,
      amount: coin.coin_amount,
      market_value: coin.price * coin.coin_amount,
      percent_change_24h: coin.percent_change_24h,
    };

    return newList;
  });

  // Sort the array in descending order based on market values
  dashboardInfoWithMarketValues.sort(function(a, b) {
    const marketValue1 = a.market_value, marketValue2 = b.market_value;
    if (marketValue1 > marketValue2) return -1;
    if (marketValue1 < marketValue2) return 1;
    return 0;
  })

  return (
    <main className="dashboard-page">
      <h1 className="dashboard-page__title">Dashboard</h1>
    </main>
  );
}

export default Dashboard;
