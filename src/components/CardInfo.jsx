import React from "react";
import { FaMap, FaSuitcase, FaEdge } from "react-icons/fa";
import SpanColor from "./SpanColor";

function CardInfo() {
  return (
    <>
      <div className="container mx-auto mt-12 px-[300px] xl:px-0 font-open-sans flex flex-row xl:flex-col items-center">
        <div class="max-w-sm p-4 bg-gray-200 rounded-lg shadow-lg shadow-gray-500/20 dark:shadow-gray-200/20 dark:bg-slate-800">
          <h5 class="font-bold sm:text-sm dark:text-white">Sobre mí</h5>

          <p class="mt-8 text-sm sm:text-xs font-medium text-gray-700 dark:text-gray-300">
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
              <FaMap className="text-xs text-gray-700 dark:text-gray-300 mr-3" />
              <p className="text-sm sm:text-xs text-gray-700 dark:text-gray-300">
                México, Ciudad de México
              </p>
            </div>

            <div className="flex flex-row items-center mb-2">
              <FaSuitcase className="text-xs text-gray-700 dark:text-gray-300 mr-3" />
              <a
                href="https://www.babelgroup.com/"
                target="_blank"
                className="text-sm sm:text-xs text-gray-700 dark:text-gray-300"
              >
                Babel
              </a>
            </div>

            <div className="flex flex-row items-center">
              <FaEdge className="text-xs text-gray-700 dark:text-gray-300 mr-3" />
              <a
                href="https://www.alanfmorag.tech/"
                target="_blank"
                className="text-sm sm:text-xs text-gray-700 dark:text-gray-300"
              >
                https://www.alanfmorag.tech/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardInfo;
