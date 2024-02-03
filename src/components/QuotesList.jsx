import QuoteItem from "./QuoteItem";

function QuotesList() {
  return (
    <>
      <ul className="phrases_section">
        <li className="phrase">
          <QuoteItem />
        </li>
        <li className="phrase">
          <QuoteItem />
        </li>
        <li className="phrase">
          <QuoteItem />
        </li>
        <li className="phrase">
          <QuoteItem />
        </li>
      </ul>
    </>
  );
}

export default QuotesList;
