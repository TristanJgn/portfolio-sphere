import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MainButton from "../../Components/MainButton/MainButton"
import "./Portfolio.scss";
import UserHoldingsTable from "../../Components/UserHoldingsTable/UserHoldingsTable";

function Portfolio({coinsList}) {
  const API_URL = process.env.REACT_APP_API_URL;
  const [userHoldings, setUserHoldings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jwtToken = sessionStorage.authToken;
    if (!jwtToken) {
      return;
    }

    axios.get(`{${API_URL}/portfolio`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
    .then((response) => {
      if (response.status === 200) {
        setUserHoldings(response.data);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      return <h2>{error.message}</h2>
    })
  }, [])

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login"); // Take the user to the login page
  };

  if (!sessionStorage.authToken) {
    return (
      <main className="portfolio-page--default">
        <div className="portfolio-page--default__container">
          <h1 className="portfolio-page--default__title">
            You must be logged in to view your portfolio.
          </h1>
          <MainButton buttonText={"Login"} onClickAction={handleLogin} />
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="portfolio-page--default">
        <div className="portfolio-page--default__container">
          <h2 className="portfolio-page--default__title">
            Getting your portfolio...
          </h2>
        </div>
      </main>
    );
  }

  return (
    <main className="portfolio-page">
      <h2 className="portfolio-page__title">Your Portfolio</h2>
      <UserHoldingsTable userHoldings={userHoldings} coinsList={coinsList}/>
    </main>
  );


}

export default Portfolio;
