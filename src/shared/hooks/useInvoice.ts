import { useCallback, useState } from "react";
import { getInvoice } from "../api/getInvoice";
import { InvoiceDataType } from "../types/InvoiceData";

export const useInvoice = () => {
  const [invoiceLink, setInvoiceLink] = useState<string>();
  const [errors, setErrors] = useState<{ [key: string]: string }>();
  const createInvoice = useCallback(
    (billingType: string, invoiceData?: InvoiceDataType) => {
      getInvoice(
        billingType,
        (blob) => {
          const blobUrl = URL.createObjectURL(blob);
          setInvoiceLink(blobUrl);
          setErrors(undefined);
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
  return { createInvoice, invoiceLink, errors };
};
