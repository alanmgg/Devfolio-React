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
      <div className="font-open-sans mt-8">
        <h5 className="font-bold text-lg sm:text-sm dark:text-white border-b border-fuchsia-600 dark:border-lime-400 py-2 mb-6">
          Experiencia
        </h5>

        <ol className="relative border-s border-fuchsia-600 dark:border-lime-400">
          {experience !== null
            ? experience.map((item) => (
                <li
                  className="bg-white rounded-lg dark:bg-gray-900 mb-8 ms-4 p-3"
                  key={item.position}
                >
                  <div className="absolute w-3 h-3 bg-fuchsia-600 rounded-full mt-1.5 -start-1.5 border border-zinc-200 dark:border-gray-900 dark:bg-lime-400"></div>

                  <time className="mb-1 text-sm sm:text-xs font-bold leading-none text-fuchsia-600 dark:text-lime-400">
                    {item.date}
                  </time>

                  <h3 className="text-base sm:text-sm font-semibold dark:text-white">
                    {item.position}
                  </h3>

                  <p className="mb-4 text-sm sm:text-xs font-medium text-gray-700 dark:text-gray-300">
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
