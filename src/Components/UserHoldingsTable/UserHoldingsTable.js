import UserHoldingsTableRow from "../UserHoldingsTableRow/UserHoldingsTableRow";
import "./UserHoldingsTable.scss";

function UserHoldingsTable({ userHoldings }) {
  return (
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
  );
}

export default UserHoldingsTable;
