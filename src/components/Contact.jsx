import React from "react";

function Information() {
  return (
    <>
      <div className="font-open-sans mt-8">
        <div className="p-4 bg-white rounded-lg dark:bg-gray-900">
          <h5 className="font-bold text-lg sm:text-sm dark:text-white border-b border-fuchsia-600 dark:border-lime-400 py-2 mb-4">
            Trabajemos juntos
          </h5>

          <div className="mb-2">
            <label
              for="name"
              class="block mb-2 text-sm sm:text-xs font-medium dark:text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              class="bg-stone-50 border border-stone-300 text-sm sm:text-xs rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-2">
            <label
              for="email"
              class="block mb-2 text-sm sm:text-xs font-medium dark:text-white"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              class="bg-stone-50 border border-stone-300 text-sm sm:text-xs rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400"
              placeholder="jhondoe@mail.com"
              required
            />
          </div>

          <div className="mb-2">
            <label
              for="subject"
              class="block mb-2 text-sm sm:text-xs font-medium dark:text-white"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              class="bg-stone-50 border border-stone-300 text-sm sm:text-xs rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400"
              placeholder="Subject"
              required
            />
          </div>

          <div className="mb-4">
            <label
              for="message"
              class="block mb-2 text-sm sm:text-xs font-medium dark:text-white"
            >
              Mensaje
            </label>
            <textarea
              type="text"
              id="message"
              rows="4"
              class="bg-stone-50 border border-stone-300 text-sm sm:text-xs rounded-lg focus:ring-fuchsia-600 focus:border-fuchsia-600 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-400 dark:focus:border-lime-400"
              placeholder="Message"
              required
            />
          </div>

          <button className="w-full py-2 rounded-lg bg-fuchsia-600 dark:bg-lime-400 text-white dark:text-gray-900 text-lg sm:text-sm font-bold">
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default Information;
