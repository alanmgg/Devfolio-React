import React, { useEffect, useState } from "react";
import ProjectsJson from "./../config/projects.json";

function BentoGridProjects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    if (ProjectsJson !== null && ProjectsJson !== undefined) {
      setProjects(ProjectsJson);
    }
  }, []);

  return (
    <div className="font-open-sans mt-8">
      <div className="columns-2 md:columns-1 gap-4 md:gap-1">
        {projects !== null
          ? projects.map((item) => (
              <div className="break-inside-avoid-column mb-5 xl:mb-5 cursor-pointer transform transition duration-500 hover:scale-105 hover:animate-pulse">
                <div className="bg-gray-200 dark:bg-slate-800 rounded-lg shadow-lg shadow-gray-500/20 dark:shadow-gray-200/20">
                  <img
                    src={"/projects/" + item.image}
                    alt={item.name}
                    className="rounded-lg w-full"
                  />

                  <div className="p-4">
                    <p className="text-sm dark:text-white font-light mt-5">
                      {item.type}
                    </p>

                    <h1 className="font-bold text-xl bg-gradient-to-r from-fuchsia-600 dark:from-lime-400 to-pink-600 dark:to-lime-500 bg-clip-text text-transparent">
                      {item.name}
                    </h1>

                    <p className="text-xs sm:text-xs dark:text-white mt-5">
                      {item.description}
                    </p>

                    <div className="mt-5">
                      {item.technologies.map((technologie) => (
                        <span class="font-medium me-2 px-2.5 py-0.5 rounded text-xs bg-fuchsia-100 text-fuchsia-500 dark:bg-lime-900 dark:text-lime-400">
                          {technologie}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default BentoGridProjects;
