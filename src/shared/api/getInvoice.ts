import { BillingType } from "../types/Billing";
import { InvoiceDataType } from "../types/InvoiceData";

export const getInvoice = (
  data: InvoiceDataType,
  billingType: BillingType,
  onSuccess: (blob: Blob) => void,
  onError: (error: any) => void
) => {
  const url = `${process.env.REACT_APP_API}/?template=${billingType}`;
  try {
    const res = fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }).then(async (response) => {
      if (response.status === 400) {
        onError(await response.json());
      } else {
        onSuccess(await response.blob());
      }
    });
  } catch (e) {
    return e;
  }
};

getInvoice(
  {
    invoiceNum: "1/2022",
    date: "04-05-2022",
    currentMonth: "MARZO",
    netAmount: "2555",
  },
  "Apophis_Contacts",
  (doc) => {
    "lavora Blob";
  },
  (error) => {}
);
