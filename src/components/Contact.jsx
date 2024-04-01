import React, { useEffect, useState } from "react";
// API
import { sendEmail } from "./../api/mail";
// Spinner
import ClockLoader from "react-spinners/ClockLoader";
// Notification
import { pushNotification } from "../utils/notifications";

function Contact({ themeSelected }) {
  const emptyValues = { name: "", email: "", subject: "", message: "" };
  const [form, setForm] = useState(emptyValues);
  const [theme, setTheme] = useState(themeSelected);
  const [loading, setLoading] = useState(false);
  const [enableButton, setEnableButton] = useState(true);

  useEffect(() => {
    setTheme(themeSelected);
  }, [themeSelected]);

  function handleUpdateValues(type, value) {
    let copyForm = { ...form };
    switch (type) {
      case "name":
        setForm({ ...form, name: value });
        copyForm = { ...form, name: value };
        break;
      case "email":
        setForm({ ...form, email: value });
        copyForm = { ...form, email: value };
        break;
      case "subject":
        setForm({ ...form, subject: value });
        copyForm = { ...form, subject: value };
        break;
      case "message":
        setForm({ ...form, message: value });
        copyForm = { ...form, message: value };
        break;
      default:
        break;
    }

    inputValidation(copyForm);
  }

  function inputValidation(copyForm) {
    if (
      copyForm.name !== "" &&
      copyForm.email !== "" &&
      copyForm.subject !== "" &&
      copyForm.message !== ""
    ) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  }

  function handleSendEmail() {
    setLoading(true);
    pushNotification("info", "Enviando correo...", theme);
    sendEmail(form, loadEmailHandler, loadErrorHandler);
  }

  async function loadEmailHandler(response) {
    if (response.ok) {
      var response = await response.json();
      if (response.message === "The form was submitted successfully.") {
        pushNotification("success", "Correo enviado", theme);
        setLoading(false);
        setForm(emptyValues);
        setEnableButton(true);
      }

      return;
    }
    if (response.status === 400) {
      pushNotification("error", "Correo no enviado", theme);
      setLoading(false);
      const error = await response.text();
      throw new Error(error);
    } else if (response.status === 401) {
      pushNotification("error", "Correo no enviado", theme);
      setLoading(false);
      const error = await response.json();
    } else if (response.status === 404) {
      pushNotification("error", "Correo no enviado", theme);
      setLoading(false);
      const error = await response.json();
    }
    throw new Error("Network response was not ok");
  }

  function loadErrorHandler(error) {}

  return (
    <>
      <div className="font-open-sans mt-8">
        <div className="p-4 bg-white rounded-lg dark:bg-gray-900">
          <h5 className="font-bold text-lg sm:text-sm dark:text-white border-b border-fuchsia-600 dark:border-lime-400 py-2 mb-4">
            Trabajemos juntos
          </h5>

          <div className="mb-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm sm:text-xs font-medium dark:text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="bg-white border border-fuchsia-400 text-sm sm:text-xs rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-800 dark:border-lime-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => handleUpdateValues("name", e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm sm:text-xs font-medium dark:text-white"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              className="bg-white border border-fuchsia-400 text-sm sm:text-xs rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-800 dark:border-lime-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400"
              placeholder="jhondoe@mail.com"
              value={form.email}
              onChange={(e) => handleUpdateValues("email", e.target.value)}
              required
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm sm:text-xs font-medium dark:text-white"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              className="bg-white border border-fuchsia-400 text-sm sm:text-xs rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-800 dark:border-lime-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => handleUpdateValues("subject", e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-sm sm:text-xs font-medium dark:text-white"
            >
              Mensaje
            </label>
            <textarea
              type="text"
              id="message"
              rows="4"
              className="bg-white border border-fuchsia-400 text-sm sm:text-xs rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-800 dark:border-lime-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400"
              placeholder="Message"
              value={form.message}
              onChange={(e) => handleUpdateValues("message", e.target.value)}
              required
            />
          </div>

          {loading === false ? (
            <button
              className="w-full py-2 mb-3 rounded-lg bg-fuchsia-600 dark:bg-lime-400 disabled:bg-fuchsia-300 dark:disabled:bg-lime-700 text-white dark:text-gray-900 text-lg sm:text-sm font-bold transform transition duration-100 enabled:hover:scale-105"
              disabled={enableButton}
              onClick={() => handleSendEmail()}
            >
              Enviar
            </button>
          ) : (
            <button className="w-full py-2 rounded-lg bg-fuchsia-600 dark:bg-lime-400 text-white dark:text-gray-900 text-lg sm:text-sm font-bold">
              <ClockLoader
                color={theme === "light" ? "#FFFFFF" : "#000000"}
                size={20}
                speedMultiplier={2}
                className="flex justify-center mt-2"
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
