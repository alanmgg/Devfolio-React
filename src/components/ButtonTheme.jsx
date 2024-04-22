import React, { useState, useEffect } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

function ButtonTheme({ onUpdateTheme }) {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
      onUpdateTheme(theme);
    } else {
      onUpdateTheme(theme);
      document.querySelector("html").classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleChangeTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <>
      <button
        className="p-3 my-8 ml-5 text-xl transition duration-100 w-11 dark:text-gray-400 hover:bg-fuchsia-100 dark:hover:bg-gray-800 hover:scale-105"
        onClick={handleChangeTheme}
      >
        {theme === "light" ? <FaRegMoon /> : <FaRegSun />}
      </button>
    </>
  );
}

export default ButtonTheme;
