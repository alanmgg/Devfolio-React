import React, { useEffect, useState } from "react";
import TabsJson from "./../config/tabs.json";

function ButtonSelect({ onSelectViewTab }) {
  const [tabs, setTabs] = useState(null);
  const [selected, setSelected] = useState("projects");

  useEffect(() => {
    if (TabsJson !== null && TabsJson !== undefined) {
      setTabs(TabsJson.tabs);
    }
  }, []);

  useEffect(() => {
    onSelectViewTab(selected);
  }, [selected]);

  return (
    <>
      <div class="bg-stone-100 rounded-lg shadow-lg shadow-gray-500/20 dark:shadow-gray-200/20 dark:bg-gray-900">
        <div className="flex flex-row">
          {tabs !== null
            ? tabs.map((item) => (
                <div
                  className={
                    item.field === selected
                      ? "w-1/3 text-center hover:bg-stone-200 dark:hover:bg-gray-800 cursor-pointer border-b border-fuchsia-600 dark:border-lime-400"
                      : "w-1/3 text-center hover:bg-stone-200 dark:hover:bg-gray-800 cursor-pointer"
                  }
                  onClick={() => setSelected(item.field)}
                >
                  <button
                    className={
                      item.field === selected
                        ? "w-full font-bold sm:text-sm text-fuchsia-600 dark:text-lime-400 p-2 transition duration-100 hover:scale-105"
                        : "w-full font-bold sm:text-sm dark:text-white p-2 transition duration-100 hover:scale-105"
                    }
                  >
                    {item.name}
                  </button>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default ButtonSelect;
