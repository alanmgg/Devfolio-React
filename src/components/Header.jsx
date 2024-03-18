import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ButtonInfo from "./ButtonInfo";

function Header() {
  return (
    <>
      <header className="font-open-sans flex flex-row xl:flex-col items-center">
        <div className="mr-12 xl:mr-0 xl:mb-5 xl:items-center">
          <LazyLoadImage
            src="/img/Profile.webp"
            alt="Profile"
            width={250}
            className="rounded-full"
            effect="blur"
          />
        </div>

        <div>
          <p className="text-base sm:text-sm dark:text-white">
            Ingeniero en computación - Software Engineer DevOps
          </p>

          <h1 className="font-bold text-3xl sm:text-3xl bg-gradient-to-r from-fuchsia-600 dark:from-lime-400 to-pink-600 dark:to-lime-500 bg-clip-text text-transparent">
            Alan Francisco Mora
          </h1>

          <p className="font-medium text-lg sm:text-base mt-3 dark:text-white">
            Hablar es barato. Muéstrame el código.
          </p>

          <ButtonInfo />
        </div>
      </header>
    </>
  );
}

export default Header;
