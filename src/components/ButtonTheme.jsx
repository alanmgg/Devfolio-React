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
      <button className="mx-5 my-8 p-2 hover:bg-slate-100 text-xl dark:text-gray-400 dark:hover:bg-slate-600">
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
