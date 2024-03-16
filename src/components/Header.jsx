import React from "react";
import ButtonInfo from "./ButtonInfo";
import profileImage from "./../assets/Profile.webp";

function Header() {
  return (
    <>
      <header className="container mx-auto px-[300px] xl:px-0 font-open-sans flex flex-row xl:flex-col items-center">
        <div className="mr-12 xl:mr-0 xl:mb-5 xl:items-center">
          <img
            src={profileImage}
            alt="Profile"
            width={250}
            className="rounded-full"
          />
        </div>

        <div>
          <p className="text-base sm:text-sm dark:text-white">
            Ingeniero en computación - Software Engineer DevOps
          </p>

          <h1 className="font-medium text-4xl sm:text-3xl bg-gradient-to-r from-fuchsia-600 dark:from-lime-400 to-pink-600 dark:to-lime-500 bg-clip-text text-transparent">
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
