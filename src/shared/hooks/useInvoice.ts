import { useCallback, useState } from "react";
import { getInvoice } from "../api/getInvoice";
import { InvoiceDataType } from "../types";
import { saveAs } from "file-saver";

export const useInvoice = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const createInvoice = useCallback(
    (billingType: unknown, invoiceData: InvoiceDataType) => {
      getInvoice(
        billingType,
        (blob) => {
          setErrors({});
          setIsLoading(!blob);
          saveAs(blob, "Fattura.docx");
        },
        (error) => {
          const issues = error.issues.reduce<{ [key: string]: string }>(
            (issueKeyValue, issue) => {
              issueKeyValue[issue.path[0]] =
                issue.code === "too_small"
                  ? "Inserisci il valore"
                  : "Il valore è errato";
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
  return { createInvoice, errors, isLoading };
};
