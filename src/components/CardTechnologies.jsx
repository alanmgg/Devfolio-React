import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import TechnologiesJson from "./../config/technologies.json";

function CardTechnologies() {
  const [technologies, setTechnologies] = useState(null);

  useEffect(() => {
    if (TechnologiesJson !== null && TechnologiesJson !== undefined) {
      setTechnologies(TechnologiesJson);
    }
  }, []);

  return (
    <>
      <div className="font-open-sans mt-8">
        <h5 className="font-bold text-lg sm:text-sm dark:text-white border-b border-fuchsia-600 dark:border-lime-400 py-2">
          Habilidades y tecnologías
        </h5>

        <div className="grid grid-cols-4 sm:grid-cols-2 gap-4 md:gap-2 mt-6">
          {technologies !== null
            ? technologies.map((item) => (
                <div
                  className="mb-3 cursor-pointer transform transition duration-500 hover:scale-105 hover:animate-pulse"
                  key={item.name}
                >
                  <div className="bg-gray-200 dark:bg-slate-800 rounded-lg shadow-lg shadow-gray-500/20 dark:shadow-gray-200/20 flex items-center px-5 h-12">
                    <LazyLoadImage
                      src={"/img/technologies/" + item.image}
                      alt={item.name}
                      width={25}
                      effect="blur"
                    />

                    <p className="text-xs sm:text-xs dark:text-white ml-3">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default CardTechnologies;
