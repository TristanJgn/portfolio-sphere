import { useState } from "react";
import UserHoldingsTableRow from "../UserHoldingsTableRow/UserHoldingsTableRow";
import searchIcon from "../../assets/icons/search.svg"
import "./UserHoldingsTable.scss";

function UserHoldingsTable({ userHoldings, coinsList }) {
  const [searchedCoin, setSearchedCoin] = useState("");

  const handleChange = (event) => {
    setSearchedCoin(event.target.value);
  }


  return (
    <section className="user-holdings-section">
      <div className="user-holdings-section__search">
        <img
          className="user-holdings-section__icon"
          src={searchIcon}
          alt="search icon"
        />
        <input
          className="user-holdings-section__input"
          type="text"
          id="coinSearch"
          name="coinSearch"
          placeholder="Search Portfolio..."
          onChange={handleChange}
          value={searchedCoin}
        ></input>
      </div>
      <div className="user-holdings-table-container">
        <table className="user-holdings-table">
          <thead className="user-holdings-table__header-container">
            <tr className="user-holdings-table__header-row">
              <th className="user-holdings-table__header-column user-holdings-table__header-column--left">
                Coin
              </th>
              <th className="user-holdings-table__header-column">Amount</th>
              <th className="user-holdings-table__header-column">Actions</th>
            </tr>
          </thead>
          <tbody className="user-holdings-table__body-container">
            {userHoldings.map((coin) => (
              <UserHoldingsTableRow key={coin.coin_id} coin={coin} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default UserHoldingsTable;
