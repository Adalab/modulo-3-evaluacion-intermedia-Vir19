import "../scss/App.scss";
import Header from "./Header";
import Form from "./Form";
import QuotesList from "./QuotesList";
import quotesData from "../data/quoteData.json";
import { useState } from "react";
import AddQuote from "./AddQuote";

function App() {
  const [quotes] = useState(quotesData);

  const [filterQuote, setFilterQuote] = useState("");
  const [filterCharacter, setFilterCharacter] = useState("all");

  const handleFilterQuote = (filterValue) => {
    setFilterQuote(filterValue);
  };

  const filteredQuote = quotes.filter((quote) => {
    const quoteMatches = quote.quote
      .toLowerCase()
      .includes(filterQuote.toLowerCase());
    const characterMatches =
      filterCharacter === "all" || quote.character === filterCharacter;
    return quoteMatches && characterMatches;
  });

  return (
    <div>
      <Header />
      <main className="main">
        <Form
          handleFilterQuote={handleFilterQuote}
          setFilterCharacter={setFilterCharacter}
        />
        <QuotesList quotes={quotes} quotes={filteredQuote} />
        <AddQuote />
      </main>
    </div>
  );
}

export default App;
