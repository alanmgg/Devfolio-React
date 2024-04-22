import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ProjectsJson from "./../config/projects.json";

function BentoGridProjects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    if (ProjectsJson !== null && ProjectsJson !== undefined) {
      setProjects(ProjectsJson);
    }
  }, []);

  return (
    <div className="mt-8 font-open-sans">
      <div className="gap-4 columns-2 sm:columns-1 md:gap-1">
        {projects !== null
          ? projects.map((item) => (
              <a href={item.url} target="_blank" key={item.name}>
                <div className="mb-5 transition duration-100 transform cursor-pointer break-inside-avoid-column xl:mb-5 hover:scale-105">
                  <div className="bg-white rounded-lg shadow-lg dark:bg-gray-900 shadow-gray-500/20 dark:shadow-gray-200/20">
                    <LazyLoadImage
                      src={"/projects/" + item.image}
                      alt={item.name}
                      className="w-full rounded-lg"
                      effect="blur"
                    />

                    <div className="p-4">
                      <p className="mt-5 text-sm font-light dark:text-white">
                        {item.type}
                      </p>

                      <h1 className="text-xl font-bold text-transparent bg-gradient-to-r from-fuchsia-600 dark:from-lime-400 to-pink-600 dark:to-lime-500 bg-clip-text">
                        {item.name}
                      </h1>

                      <p className="mt-5 text-xs sm:text-xs dark:text-white">
                        {item.description}
                      </p>

                      <div className="mt-5">
                        {item.technologies.map((technologie) => (
                          <span
                            className="font-medium me-2 px-2.5 py-0.5 rounded text-xs bg-fuchsia-100 text-fuchsia-500 dark:bg-lime-900 dark:text-lime-400"
                            key={technologie}
                          >
                            {technologie}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))
          : null}
      </div>
    </div>
  );
}

export default BentoGridProjects;
