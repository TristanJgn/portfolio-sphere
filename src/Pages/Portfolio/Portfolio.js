import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MainButton from "../../Components/MainButton/MainButton"
import "./Portfolio.scss";
import UserHoldingsTable from "../../Components/UserHoldingsTable/UserHoldingsTable";

function Portfolio({coinsList}) {
  const [userHoldings, setUserHoldings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jwtToken = sessionStorage.authToken;
    if (!jwtToken) {
      return;
    }

    axios.get("http://localhost:8080/portfolio", {
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
      <main className="portfolio-page">
        <h1 className="portfolio-page__title">
          You must be logged in to view your portfolio.
        </h1>
        <MainButton
          buttonText={"Login"}
          onClickAction={handleLogin}
        />
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="portfolio-page">
        <h2 className="portfolio-page__title">Getting your portfolio...</h2>
      </main>
    );
  }

  if (!userHoldings) {
    return (
      <main className="portfolio-page">
        <h2 className="portfolio-page__title">Add coins to your portfolio</h2>
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
