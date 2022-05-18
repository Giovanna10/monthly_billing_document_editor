import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Edit your monthly billing</p>
      <label>Numero fattura</label>
      <input title="invoiceNum" placeholder="Inserisci numero" />
      <label>Data compilazione</label>
      <input title="date" placeholder="Inserisci data" />
      <label>Mese di riferimento</label>
      <input title="currentMonth" placeholder="Inserisci mese" />
      <label>Compenso netto</label>
      <input title="netAmount" placeholder="Inserisci compenso" />
      <button onClick={() => console.log()}>Crea fattura</button>
    </div>
  );
}

export default App;
