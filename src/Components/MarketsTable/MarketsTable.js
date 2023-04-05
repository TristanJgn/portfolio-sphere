import { priceFormat, roundedDollarFormat, percentageFormat } from "../../Utils/NumberFormatting";
import "./MarketsTable.scss";

function MarketsTable({coinsList}) {

  if (!coinsList) {
    return <h2>Loading market data...</h2>
  }

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
            {coinsList.map((coin, index) => {
                return (
                    <tr className="markets-table__body-row" key={coin.id}>
                    <td className="markets-table__body-column markets-table__body-column--sticky--first">
                        {index + 1}
                    </td>
                    <td className="markets-table__body-column markets-table__body-column--sticky--second">
                        <div className="markets-table__body-column-coin">
                        <p className="markets-table__body-column-coin__name">
                            {coin.name}
                        </p>
                        <p className="markets-table__body-column-coin__symbol">
                            {coin.symbol}
                        </p>
                        </div>
                    </td>
                    <td className="markets-table__body-column">
                        {priceFormat(coin.price)}
                    </td>
                    <td
                        className={`markets-table__body-column ${
                        coin.percent_change_1h > 0
                            ? "markets-table__body-column--positive"
                            : "markets-table__body-column--negative"
                        }`}
                    >
                        {percentageFormat(coin.percent_change_1h)}
                    </td>
                    <td
                        className={`markets-table__body-column ${
                        coin.percent_change_24h > 0
                            ? "markets-table__body-column--positive"
                            : "markets-table__body-column--negative"
                        }`}
                    >
                        {percentageFormat(coin.percent_change_24h)}
                    </td>
                    <td
                        className={`markets-table__body-column ${
                        coin.percent_change_7d > 0
                            ? "markets-table__body-column--positive"
                            : "markets-table__body-column--negative"
                        }`}
                    >
                        {percentageFormat(coin.percent_change_7d)}
                    </td>
                    <td className="markets-table__body-column">
                        {roundedDollarFormat(coin.market_cap)}
                    </td>
                    <td className="markets-table__body-column">
                        {roundedDollarFormat(coin.volume_24h)}
                    </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    </div>
  );
}

export default MarketsTable;
