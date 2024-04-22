import React from "react";
import { FaCommentAlt, FaYoutube } from "react-icons/fa";

function ButtonInfo() {
  return (
    <>
      <div className="flex flex-row lg:text-center">
        <a
          className="flex flex-row items-center px-4 py-2 mt-4 transition duration-100 transform bg-white rounded cursor-pointer hover:scale-105 hover:bg-fuchsia-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
          href="mailto:alanfmorag@gmail.com"
        >
          <FaCommentAlt className="mr-2 text-xs" />{" "}
          <p className="text-sm sm:text-xs">alanfmorag@gmail.com</p>
        </a>

        <a
          className="flex flex-row items-center px-4 py-2 mt-4 ml-5 transition duration-100 transform bg-white rounded cursor-pointer hover:scale-105 hover:bg-fuchsia-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
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
