import { FC, useCallback, useState } from "react";
import { useInvoice } from "../../hooks/useInvoice";
import { InvoiceDataType } from "../../types/InvoiceData";
import { SubmitButton } from "../button/SubmitButton";
import Input from "../input";
import { Select } from "../select/Select";
import "./Form.css";

export const Form: FC = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceDataType>();
  const [companyName, setCompanyName] = useState<string>("Apophis_Contacts");

  const { errors, createInvoice, invoiceLink } = useInvoice();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget) {
        const { name, value } = event.currentTarget;
        setInvoiceData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    },
    []
  );
  const handleSelect = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => setCompanyName(value);

  return (
    <div className="form">
      <Select handleChange={handleSelect} />
      <Input
        label="Numero fattura"
        name="invoiceNum"
        placeholder="Inserisci numero"
        handleChange={handleChange}
      />
      <Input
        label="Data compilazione"
        name="date"
        placeholder="Inserisci data"
        handleChange={handleChange}
      />
      <Input
        label="Mese di riferimento"
        name="currentMonth"
        placeholder="Inserisci mese"
        handleChange={handleChange}
      />
      <Input
        label="Compenso netto"
        name="netAmount"
        placeholder="Inserisci compenso"
        handleChange={handleChange}
      />
      <SubmitButton onClick={() => createInvoice(companyName, invoiceData)} />
      {invoiceLink ? <a href={invoiceLink}>Scarica Fattura</a> : null}
    </div>
  );
};
