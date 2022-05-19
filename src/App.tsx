import "./App.css";
import { Form } from "./shared/components/form/Form";
import { useInvoice } from "./shared/hooks/useInvoice";

function App() {
  const { invoiceLink } = useInvoice();
  return (
    <div className="App">
      <p>Crea la tua fattura</p>
      <Form />
      {invoiceLink ? <a href={invoiceLink}>Scarica Fattura</a> : null}
    </div>
  );
}

export default App;
