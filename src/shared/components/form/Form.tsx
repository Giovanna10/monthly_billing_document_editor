import { FC, useCallback, useState } from "react";
import { useInvoice } from "../../hooks/useInvoice";
import { InvoiceDataType } from "../../types";
import { SubmitButton } from "../button/SubmitButton";
import Input from "../input";
import "./Form.css";
import { inputs } from "./inputs";

export const Form: FC = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceDataType>({
    invoiceNum: "",
    date: new Date().toLocaleDateString(),
    currentMonth: "Gennaio",
    netAmount: "",
  });
  const [companyName, setCompanyName] = useState<string>("Apophis_Contacts");

  const { createInvoice, errors } = useInvoice();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget) {
        const { type, name, value, valueAsNumber, valueAsDate } =
          event.currentTarget;
        setInvoiceData((prev) => ({
          ...prev,
          [name]:
            type === "number"
              ? valueAsNumber
              : type === ""
              ? valueAsDate
              : value,
        }));
      }
    },
    []
  );

  const handleSelect = ({
    currentTarget,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = currentTarget;
    setCompanyName((prev) => (name === "company" ? value : prev));
    setInvoiceData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="form">
      {inputs.map(({ key, label, inputType, type, options, placeholder }) => {
        return (
          <Input
            key={key}
            label={label}
            name={key}
            inputType={inputType}
            type={type}
            options={options}
            placeholder={placeholder}
            handleChange={handleChange}
            handleSelect={handleSelect}
            error={errors?.[key]}
          />
        );
      })}
      <SubmitButton onClick={() => createInvoice(companyName, invoiceData)} />
    </div>
  );
};
