import MarketsTable from "../../Components/MarketsTable/MarketsTable";
import "./Markets.scss";

function Markets() {
  return (
    <main className="markets-page">
      <h1 className="markets-page__title">Markets</h1>
      <MarketsTable />
    </main>
  );
}

export default Markets;
