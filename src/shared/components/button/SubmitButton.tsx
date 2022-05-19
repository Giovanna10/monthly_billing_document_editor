import { FC } from "react";
import { useInvoice } from "../../hooks/useInvoice";
import { InvoiceDataType } from "../../types/InvoiceData";

type SubmitProps = {
  invoiceData?: InvoiceDataType;
  companyName: string;
};

export const SubmitButton: FC<SubmitProps> = ({ invoiceData, companyName }) => {
  const { createInvoice } = useInvoice();
  return (
    <button onClick={() => createInvoice(companyName, invoiceData)}>
      Crea
    </button>
  );
};
