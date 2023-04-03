import "./MarketsTable.scss";

function MarketsTable() {
  return (
    <div className="markets-table-container">
      <table className="markets-table">
        <thead className="markets-table__header-container">
          <tr className="markets-table__header-row">
            <th className="markets-table__header-column markets-table__header-column--sticky--first">
              Rank
            </th>
            <th className="markets-table__header-column markets-table__header-column--sticky--second">
              Coin
            </th>
            <th className="markets-table__header-column">Price</th>
            <th className="markets-table__header-column">1h</th>
            <th className="markets-table__header-column">24h</th>
            <th className="markets-table__header-column">7d</th>
            <th className="markets-table__header-column">Market Cap</th>
            <th className="markets-table__header-column">24h Volume</th>
          </tr>
        </thead>
        <tbody className="markets-table__body-container">
          <tr className="markets-table__body-row">
            <td className="markets-table__body-column markets-table__body-column--sticky--first">
              1
            </td>
            <td className="markets-table__body-column markets-table__body-column--sticky--second">
              Bitcoin
            </td>
            <td className="markets-table__body-column">$7,500</td>
            <td className="markets-table__body-column">0.6%</td>
            <td className="markets-table__body-column">-0.5%</td>
            <td className="markets-table__body-column">2.00%</td>
            <td className="markets-table__body-column">$900,000,000,000</td>
            <td className="markets-table__body-column">$700,000,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MarketsTable;
