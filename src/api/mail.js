import { handleResponse, handleError } from "./apiUtils";
import { Resend } from "resend";

export async function sendEmail(
  form,
  responseHandler = handleResponse,
  errorHandler = handleError
) {
  let endpoint_url =
    "https://formsubmit.co/ajax/1020e1c95549a0e72cc3ae9b9458ccbb";

  const text_config = {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message
  };

  return fetch(endpoint_url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(text_config)
  })
    .then(responseHandler)
    .catch(errorHandler);
}
