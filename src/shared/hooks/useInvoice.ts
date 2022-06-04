import { useCallback, useState } from "react";
import { getInvoice } from "../api/getInvoice";
import { InvoiceDataType } from "../types";
import { saveAs } from "file-saver";

export const useInvoice = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>();
  const createInvoice = useCallback(
    (billingType: string, invoiceData?: InvoiceDataType) => {
      getInvoice(
        billingType,
        (blob) => {
          saveAs(blob, "Fattura.docx");
        },
        (error) => {
          const issues = error.issues.reduce<{ [key: string]: string }>(
            (issueKeyValue, issue) => {
              issueKeyValue[issue.path[0]] = issue.message;
              return issueKeyValue;
            },
            {}
          );
          setErrors(issues);
        },
        invoiceData
      );
    },
    []
  );
  return { createInvoice, errors };
};
