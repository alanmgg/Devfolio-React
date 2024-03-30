import React from "react";
import { FaCommentAlt, FaYoutube } from "react-icons/fa";

function ButtonInfo() {
  return (
    <>
      <div className="flex flex-row lg:text-center">
        <a
          className="mt-4 py-2 px-4 transform transition duration-100 hover:scale-105 bg-white hover:bg-fuchsia-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white flex flex-row items-center rounded cursor-pointer"
          href="mailto:alanfmorag@gmail.com"
        >
          <FaCommentAlt className="mr-2 text-xs" />{" "}
          <p className="text-sm sm:text-xs">alanfmorag@gmail.com</p>
        </a>

        <a
          className="mt-4 ml-5 py-2 px-4 transform transition duration-100 hover:scale-105 bg-white hover:bg-fuchsia-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white flex flex-row items-center rounded cursor-pointer"
          href="https://www.youtube.com/@soyalantech"
        >
          <FaYoutube className="mr-2 text-xs" />{" "}
          <p className="text-sm sm:text-xs">@soyalantech</p>
        </a>
      </div>
    </>
  );
}

export default ButtonInfo;
