import React, { useEffect, useState } from "react";
import ExperienceJson from "./../config/experience.json";

function TimelineExperiencie() {
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    if (ExperienceJson !== null && ExperienceJson !== undefined) {
      setExperience(ExperienceJson);
    }
  }, []);

  return (
    <>
      <div className="mt-8 font-open-sans">
        <h5 className="py-2 mb-6 text-lg font-bold border-b sm:text-sm dark:text-white border-fuchsia-600 dark:border-lime-400">
          Experiencia
        </h5>

        <ol className="relative border-s border-fuchsia-600 dark:border-lime-400">
          {experience !== null
            ? experience.map((item) => (
                <li
                  className="p-3 mb-8 bg-white rounded-lg dark:bg-gray-900 ms-4"
                  key={item.position}
                >
                  <div className="absolute w-3 h-3 bg-fuchsia-600 rounded-full mt-1.5 -start-1.5 border border-zinc-200 dark:border-gray-900 dark:bg-lime-400"></div>

                  <time className="mb-1 text-sm font-bold leading-none sm:text-xs text-fuchsia-600 dark:text-lime-400">
                    {item.date}
                  </time>

                  <h3 className="text-base font-semibold sm:text-sm dark:text-white">
                    {item.position}
                  </h3>

                  <p className="mb-4 text-sm font-medium text-gray-700 sm:text-xs dark:text-gray-300">
                    {item.description}
                  </p>
                </li>
              ))
            : null}
        </ol>
      </div>
    </>
  );
}

export default TimelineExperiencie;
