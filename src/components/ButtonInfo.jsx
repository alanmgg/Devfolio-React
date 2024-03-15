import React from "react";
import { FaCommentAlt, FaPhoneAlt } from "react-icons/fa";

function ButtonInfo() {
  return (
    <>
      <div className="flex flex-row lg:text-center">
        <button
          className="mt-4 py-2 px-4 bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white flex flex-row items-center rounded"
          onClick={() => (window.location = "mailto:alanfmorag@gmail.com")}
        >
          <FaCommentAlt className="mr-2 text-xs" />{" "}
          <p className="text-sm sm:text-xs">alanfmorag@gmail.com</p>
        </button>

        <button
          className="mt-4 ml-5 py-2 px-4 bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white flex flex-row items-center rounded"
          onClick={() => (window.location = "tel:+525549034170")}
        >
          <FaPhoneAlt className="mr-2 text-xs" />{" "}
          <p className="text-sm sm:text-xs">+52 55 4903 4170</p>
        </button>
      </div>
    </>
  );
}

export default ButtonInfo;
