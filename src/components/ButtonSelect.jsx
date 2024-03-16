import React, { useEffect, useState } from "react";
import TabsJson from "./../config/tabs.json";

function ButtonSelect() {
  const [tabs, setTabs] = useState(null);
  const [selected, setSelected] = useState("proyects");

  useEffect(() => {
    if (TabsJson !== null && TabsJson !== undefined) {
      setTabs(TabsJson.tabs);
    }
  }, []);

  return (
    <>
      <div class="bg-gray-200 rounded-lg shadow-lg shadow-gray-500/20 dark:shadow-gray-200/20 dark:bg-slate-800">
        <div className="flex flex-row">
          {tabs !== null
            ? tabs.map((item) => (
                <div
                  className={
                    item.field === selected
                      ? "w-1/3 text-center hover:bg-gray-300 dark:hover:bg-slate-700 cursor-pointer border-b border-fuchsia-600 dark:border-lime-400"
                      : "w-1/3 text-center hover:bg-gray-300 dark:hover:bg-slate-700 cursor-pointer"
                  }
                  onClick={() => setSelected(item.field)}
                >
                  <button
                    className={
                      item.field === selected
                        ? "font-bold sm:text-sm text-fuchsia-600 dark:text-lime-400 p-2"
                        : "font-bold sm:text-sm dark:text-white p-2"
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
