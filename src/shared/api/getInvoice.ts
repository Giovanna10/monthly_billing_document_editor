import { InvalidDataResponse, InvoiceDataType } from "../types";

export const getInvoice = (
  billingType: string,
  onSuccess: (blob: Blob) => void,
  onError: (error: InvalidDataResponse) => void,
  data?: InvoiceDataType
) => {
  const url = `https://don-invoice-generator.herokuapp.com/?template=${billingType}`;
  try {
    fetch(url, {
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
