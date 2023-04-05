import { useState } from "react";
import UserHoldingsTableRow from "../UserHoldingsTableRow/UserHoldingsTableRow";
import searchIcon from "../../assets/icons/search.svg"
import "./UserHoldingsTable.scss";
import MainButton from "../MainButton/MainButton";
import AddModal from "../AddModal/AddModal";

function UserHoldingsTable({ userHoldings, coinsList }) {
  const [searchedCoin, setSearchedCoin] = useState("");
  const [showAdd, setShowAdd] = useState(false);

  const onCloseAdd = () => setShowAdd(false);

  const handleChange = (event) => {
    setSearchedCoin(event.target.value);
  }

  if (!coinsList) {
    return <h2>Loading portfolio...</h2>
  }

  const coinNames = coinsList.map((coin) => coin.name); // Grab all the possible coin names
  const existingCoinNames = userHoldings.map((coin) => coin.coin_name); // Grab the coins which the user already has in their portfolio
  const filteredCoinNames = coinNames.filter(name => !existingCoinNames.includes(name)); // Filter out the existing coins to prevent a user from adding a coin that is already in their portfolio

  const filteredUserHoldings = userHoldings.filter(holding => holding.coin_name.includes(searchedCoin)); // Enables search functionality by filtering out holdings based on name of coin user is searching

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
      <MainButton
        buttonText={"+ Add coin to portfolio"}
        onClickAction={() => setShowAdd(true)}
      />
      <AddModal
        onClose={onCloseAdd}
        show={showAdd}
        setShow={setShowAdd}
        coinNames={filteredCoinNames}
        coinsList={coinsList}
      />
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
            {filteredUserHoldings.map((coin) => (
              <UserHoldingsTableRow key={coin.coin_id} coin={coin} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default UserHoldingsTable;
