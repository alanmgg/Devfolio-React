import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ButtonInfo from "./ButtonInfo";
import "./../assets/Header.css";

function Header() {
  return (
    <>
      <header className="flex flex-row items-center font-open-sans xl:flex-col">
        <div className="mr-12 xl:mr-0 xl:mb-5 xl:items-center">
          <LazyLoadImage
            src="/img/Profile.webp"
            alt="Profile"
            width={250}
            className="rounded-full"
            effect="blur"
          />
        </div>

        <div className="xl:text-center xl:flex xl:flex-col xl:items-center">
          <p className="text-base sm:text-sm dark:text-white">
            Ingeniero en computación - Software Engineer DevOps
          </p>

          <h1 className="text-3xl font-bold text-transparent sm:text-3xl bg-gradient-to-r from-fuchsia-600 dark:from-lime-400 via-blue-400 dark:via-red-400 to-green-400 dark:to-orange-300 bg-clip-text bg-300% animate-gradient">
            Alan Francisco Mora González
          </h1>

          <p className="mt-3 text-lg font-medium sm:text-base dark:text-white">
            Hablar es barato. Muéstrame el código.
          </p>

          <ButtonInfo />
        </div>
      </header>
    </>
  );
}

export default Header;
