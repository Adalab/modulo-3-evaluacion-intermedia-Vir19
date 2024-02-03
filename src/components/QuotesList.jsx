import QuoteItem from "./QuoteItem";
import PropTypes from "prop-types";

function QuotesList({ quotes }) {
  const htmlQuotes = quotes.map((quote, idx) => (
    <li key={idx} className="phrase">
      <QuoteItem quote={quote.quote} character={quote.character} />
    </li>
  ));

  return (
    <>
      <ul className="phrases_section">{htmlQuotes}</ul>
    </>
  );
}

QuotesList.PropTypes = {
  quotes: PropTypes.array,
};

export default QuotesList;
