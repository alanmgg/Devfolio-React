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
      <div className="mt-8 font-open-sans">
        <h5 className="py-2 text-lg font-bold border-b sm:text-sm dark:text-white border-fuchsia-600 dark:border-lime-400">
          Habilidades y tecnologías
        </h5>

        <div className="grid grid-cols-4 gap-4 mt-6 sm:grid-cols-2 md:gap-2">
          {technologies !== null
            ? technologies.map((item) => (
                <div
                  className="mb-3 transition duration-100 transform cursor-pointer hover:scale-105"
                  key={item.name}
                >
                  <div className="flex items-center h-12 px-5 bg-white rounded-lg dark:bg-gray-900">
                    <LazyLoadImage
                      src={"/img/technologies/" + item.image}
                      alt={item.name}
                      width={25}
                      effect="blur"
                    />

                    <p className="ml-3 text-xs sm:text-xs dark:text-white">
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
