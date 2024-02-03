import "../scss/App.scss";
import Header from "./Header";
import Form from "./Form";
import QuotesList from "./QuotesList";
import quotesData from "../data/quoteData.json";
import { useState } from "react";

function App() {
  const [quotes] = useState(quotesData);

  const [filterQuote, setFilterQuote] = useState("");

  const handleFilterQuote = (filterValue) => {
    setFilterQuote(filterValue);
  };

  const filteredQuote = quotes.filter((quote) =>
    quote.quote.toLowerCase().includes(filterQuote.toLowerCase())
  );
  return (
    <div>
      <Header />
      <Form handleFilterQuote={handleFilterQuote} />
      <main className="main">
        <QuotesList quotes={quotes} quotes={filteredQuote} />
      </main>
    </div>
  );
}

export default App;
