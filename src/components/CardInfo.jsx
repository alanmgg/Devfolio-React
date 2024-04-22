import React from "react";
import {
  FaMap,
  FaSuitcase,
  FaEdge,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import SpanColor from "./SpanColor";

function CardInfo() {
  return (
    <>
      <div className="flex items-center font-open-sans xl:flex-col">
        <div className="p-4 bg-white rounded-lg dark:bg-gray-900">
          <h5 className="py-2 text-lg font-bold border-b sm:text-sm dark:text-white border-fuchsia-600 dark:border-lime-400">
            Sobre mí
          </h5>

          <p className="mt-8 text-sm font-medium text-gray-700 sm:text-xs dark:text-gray-300">
            <SpanColor label="Ingeniero" /> especializado en el desarrollo de
            aplicaciones <SpanColor label="web" /> y{" "}
            <SpanColor label="móviles" />, con enfoque en la resolución de
            problemas complejos y diseño atractivo. Mantengo una actualización
            constante en <SpanColor label="tendencias tecnológicas" /> y estoy
            comprometido con la calidad, destacando en habilidades para el
            trabajo en equipo. Poseo conocimientos sólidos en{" "}
            <SpanColor label="Desarrollo Cloud" /> y prácticas{" "}
            <SpanColor label="DevOps" /> para garantizar una implementación
            eficiente y continua. 💡
          </p>

          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center mb-2">
              <FaMap className="mr-3 text-xs text-gray-700 dark:text-gray-300" />
              <p className="text-sm text-gray-700 sm:text-xs dark:text-gray-300">
                México, Ciudad de México
              </p>
            </div>

            <div className="flex flex-row items-center mb-2">
              <FaSuitcase className="mr-3 text-xs text-gray-700 dark:text-gray-300" />
              <a
                href="https://www.babelgroup.com/"
                target="_blank"
                className="text-sm text-gray-700 sm:text-xs dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-lime-400"
              >
                Babel
              </a>
            </div>

            <div className="flex flex-row items-center">
              <FaEdge className="mr-3 text-xs text-gray-700 dark:text-gray-300" />
              <a
                href="https://www.alancoding.tech/"
                target="_blank"
                className="text-sm text-gray-700 sm:text-xs dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-lime-400"
              >
                https://www.alancoding.tech/
              </a>
            </div>
          </div>

          <h5 className="py-2 mt-8 text-lg font-bold border-b sm:text-sm dark:text-white border-fuchsia-600 dark:border-lime-400">
            Redes sociales
          </h5>

          <div className="flex flex-row mt-4">
            <a
              href="https://www.linkedin.com/in/alanmgg/"
              target="_blank"
              className="mr-3"
            >
              <FaLinkedin className="text-2xl text-gray-700 sm:text-lg dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-lime-400" />
            </a>

            <a
              href="https://github.com/alanmgg"
              target="_blank"
              className="mr-3"
            >
              <FaGithub className="text-2xl text-gray-700 sm:text-lg dark:text-gray-300 hover:text-fuchsia-600 dark:hover:text-lime-400" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardInfo;
