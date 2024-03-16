import React, { useState, useEffect } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

function ButtonTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  function handleChangeTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <>
      <button className="w-11 ml-5 my-8 p-3 hover:bg-slate-100 text-xl dark:text-gray-400 dark:hover:bg-slate-600">
        {theme === "light" ? (
          <FaRegMoon onClick={handleChangeTheme} />
        ) : (
          <FaRegSun onClick={handleChangeTheme} />
        )}
      </button>
    </>
  );
}

export default ButtonTheme;
