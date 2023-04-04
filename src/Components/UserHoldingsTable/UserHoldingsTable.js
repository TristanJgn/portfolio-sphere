import editIcon from "../../assets/icons/edit.svg"
import deleteIcon from "../../assets/icons/delete.svg";
import "./UserHoldingsTable.scss";

function UserHoldingsTable({userHoldings}) {

  return (
    <div className="user-holdings-table-container">
      <table className="user-holdings-table">
        <thead className="user-holdings-table__header-container">
          <tr className="user-holdings-table__header-row">
            <th className="user-holdings-table__header-column">Rank</th>
            <th className="user-holdings-table__header-column user-holdings-table__header-column--left">
              Coin
            </th>
            <th className="user-holdings-table__header-column">Amount</th>
            <th className="user-holdings-table__header-column">Actions</th>
          </tr>
        </thead>
        <tbody className="user-holdings-table__body-container">
          {userHoldings.map((coin, index) => {
            return (
              <tr className="user-holdings-table__body-row" key={coin.coin_id}>
                <td className="user-holdings-table__body-column">
                  {index + 1}
                </td>
                <td className="user-holdings-table__body-column">
                  <div className="user-holdings-table__body-column-coin">
                    <p className="user-holdings-table__body-column-coin__name">
                      {coin.coin_name}
                    </p>
                    <p className="user-holdings-table__body-column-coin__symbol">
                      {coin.coin_symbol}
                    </p>
                  </div>
                </td>
                <td className="user-holdings-table__body-column">
                  {/* Multiplying by 1 removes any trailing zeros */}
                  {coin.coin_amount * 1}
                </td>
                <td className="user-holdings-table__body-column">
                  <div className="user-holdings-table__body-column-actions">
                    <img
                      className="user-holdings-table__body-column-actions__edit"
                      src={editIcon}
                      alt="edit icon"
                    />
                    <img
                      className="user-holdings-table__body-column-actions__delete"
                      src={deleteIcon}
                      alt="delete icon"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserHoldingsTable;
