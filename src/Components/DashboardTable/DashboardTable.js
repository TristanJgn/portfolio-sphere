import { useState } from "react";
import {
  priceFormat,
  roundedDollarFormat,
  percentageFormat,
} from "../../Utils/NumberFormatting";
import searchIcon from "../../assets/icons/search.svg";
import "./DashboardTable.scss";

function DashboardTable({ finalDashboardInfo }) {
  const [searchedCoin, setSearchedCoin] = useState("");

  if (!finalDashboardInfo) {
    return <h2>Loading dashboard info...</h2>;
  }

  const handleChange = (event) => {
    setSearchedCoin(event.target.value);
  };

  // Add rank to the list at the start so it holds even when the list becomes filtered based on user search
  const finalDashboardInfoWithRank = finalDashboardInfo.map((coin, index) => {
    return {
      ...coin,
      rank: index + 1,
    };
  });

  const filteredDashboardInfo = finalDashboardInfoWithRank.filter(
    (coin) =>
      coin.name.toLowerCase().startsWith(searchedCoin.toLowerCase()) ||
      coin.symbol.toLowerCase().startsWith(searchedCoin.toLowerCase())
  ); // Enables search functionality by filtering out holdings based on name or symbol of coin user is searching using toLowerCase to eliminate case sensitivity

  return (
    <section className="dashboard-table-section">
      <div className="dashboard-table-section__search">
        <img
          className="dashboard-table-section__icon"
          src={searchIcon}
          alt="search icon"
        />
        <input
          className="dashboard-table-section__input"
          type="text"
          id="coinSearch"
          name="coinSearch"
          placeholder="Search Holdings..."
          onChange={handleChange}
          value={searchedCoin}
        ></input>
      </div>
      <div className="dashboard-table-container">
        <table className="dashboard-table">
          <thead className="dashboard-table__header-container">
            <tr className="dashboard-table__header-row">
              <th className="markets-table__header-column markets-table__header-column--sticky--first">
                Rank
              </th>
              <th className="dashboard-table__header-column dashboard-table__header-column--sticky--second">
                Coin
              </th>
              <th className="dashboard-table__header-column">Price</th>
              <th className="dashboard-table__header-column">Amount</th>
              <th className="dashboard-table__header-column">Market Value</th>
              <th className="dashboard-table__header-column">% of Portfolio</th>
              <th className="dashboard-table__header-column">24h</th>
            </tr>
          </thead>
          <tbody className="dashboard-table__body-container">
            {filteredDashboardInfo.map((coin) => {
              return (
                <tr className="dashboard-table__body-row" key={coin.id}>
                  <td className="markets-table__body-column markets-table__body-column--sticky--first">
                    {coin.rank}
                  </td>
                  <td className="dashboard-table__body-column dashboard-table__body-column--sticky--second">
                    <div className="dashboard-table__body-column-coin">
                      <p className="dashboard-table__body-column-coin__name">
                        {coin.name}
                      </p>
                      <p className="dashboard-table__body-column-coin__symbol">
                        {coin.symbol}
                      </p>
                    </div>
                  </td>
                  <td className="dashboard-table__body-column">
                    {priceFormat(coin.price)}
                  </td>
                  <td className="dashboard-table__body-column">
                    {/* Multiplying by 1 removes any trailing zeros */}
                    {coin.coin_amount * 1}
                  </td>
                  <td className="dashboard-table__body-column">
                    {roundedDollarFormat(coin.market_value)}
                  </td>
                  <td className="dashboard-table__body-column">
                    {percentageFormat(coin.portfolio_percent * 100)}
                  </td>
                  <td
                    className={`dashboard-table__body-column ${
                      coin.percent_change_24h > 0
                        ? "dashboard-table__body-column--positive"
                        : "dashboard-table__body-column--negative"
                    }`}
                  >
                    {percentageFormat(coin.percent_change_24h)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DashboardTable;
