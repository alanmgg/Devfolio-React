import React from "react";
import { FaCommentAlt, FaYoutube } from "react-icons/fa";

function ButtonInfo() {
  return (
    <>
      <div className="flex flex-row lg:text-center">
        <a
          className="mt-4 py-2 px-4 shadow-lg shadow-gray-500/20 dark:shadow-gray-200/20 bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white flex flex-row items-center rounded cursor-pointer"
          href="mailto:alanfmorag@gmail.com"
        >
          <FaCommentAlt className="mr-2 text-xs" />{" "}
          <p className="text-sm sm:text-xs">alanfmorag@gmail.com</p>
        </a>

        <a
          className="mt-4 ml-5 py-2 px-4 shadow-lg shadow-gray-500/20 dark:shadow-gray-200/20 bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white flex flex-row items-center rounded cursor-pointer"
          href="https://www.youtube.com/@soyalantech"
        >
          <FaYoutube className="mr-2 text-xs" />{" "}
          <p className="text-sm sm:text-xs">@soyalantech</p>
        </a>

        {/* <button
          className="mt-4 ml-5 py-2 px-4 bg-gray-200 shadow-lg shadow-gray-500/20 dark:shadow-gray-200/20 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white flex flex-row items-center rounded"
          onClick={() => (window.location = "tel:+525549034170")}
        >
          <FaPhoneAlt className="mr-2 text-xs" />{" "}
          <p className="text-sm sm:text-xs">+52 55 4903 4170</p>
        </button> */}
      </div>
    </>
  );
}

export default ButtonInfo;
