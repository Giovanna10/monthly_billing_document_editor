import { FC, useCallback, useState } from "react";
import { useInvoice } from "../../hooks/useInvoice";
import { InvoiceDataType } from "../../types/InvoiceData";
import { SubmitButton } from "../button/SubmitButton";
import Input from "../input";
import { Select } from "../select/Select";
import "./Form.css";
import { inputs } from "./inputs";

export const Form: FC = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceDataType>();
  const [companyName, setCompanyName] = useState<string>("Apophis_Contacts");

  const { createInvoice, invoiceLink, errors } = useInvoice();

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
      {inputs.map(({ key, label, placeholder }) => {
        return (
          <Input
            label={label}
            name={key}
            placeholder={placeholder}
            handleChange={handleChange}
            error={errors?.[key]}
          />
        );
      })}
      <SubmitButton onClick={() => createInvoice(companyName, invoiceData)} />
      {invoiceLink ? <a href={invoiceLink}>Scarica Fattura</a> : null}
    </div>
  );
};
