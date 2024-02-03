import "../scss/App.scss";
import Header from "./Header";
import Form from "./Form";
import QuotesList from "./QuotesList";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <main className="main">
        <QuotesList />
      </main>
    </div>
  );
}

export default App;
