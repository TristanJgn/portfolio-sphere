import MarketsTable from "../../Components/MarketsTable/MarketsTable";
import "./Markets.scss";

function Markets({coinsList}) {
  window.onload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main className="markets-page">
      <h1 className="markets-page__title">Markets</h1>
      <MarketsTable coinsList={coinsList}/>
    </main>
  );
}

export default Markets;
