import PropTypes from "prop-types";

function QuoteItem({ quote, character }) {
  return (
    <>
      {quote}.-
      <span className="names">{character}</span>
    </>
  );
}

export default QuoteItem;

QuoteItem.PropTypes = {
  quote: PropTypes.array,
  character: PropTypes.array,
};
