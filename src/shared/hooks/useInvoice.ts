import { useCallback, useState } from "react";
import { getInvoice } from "../api/getInvoice";
import { InvoiceDataType } from "../types/InvoiceData";

export const useInvoice = () => {
  const [invoiceLink, setInvoiceLink] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const createInvoice = useCallback(
    (billingType: string, invoiceData?: InvoiceDataType) => {
      getInvoice(
        billingType,
        (blob) => {
          const blobUrl = URL.createObjectURL(blob);
          setInvoiceLink(blobUrl);
        },
        (error) => {
          const issue = error.issues.reduce((issueMessage, issue) => {
            issueMessage = `${issue.message} for ${issue.path.toString()}`;
            return issueMessage;
          }, "");
          setErrorMessage(issue);
        },
        invoiceData,
      );
    },
    []
  );
  return { createInvoice, invoiceLink, errorMessage };
};
