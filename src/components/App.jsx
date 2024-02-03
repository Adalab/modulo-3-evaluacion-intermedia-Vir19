import "../scss/App.scss";
import Header from "./Header";
import Form from "./Form";
import QuotesList from "./QuotesList";
import quotesData from "../data/quoteData.json";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState(quotesData);
  console.log(quotes);

  return (
    <div>
      <Header />
      <Form />
      <main className="main">
        <QuotesList quotes={quotes} />
      </main>
    </div>
  );
}

export default App;
