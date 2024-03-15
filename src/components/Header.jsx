import React from "react";

function Header() {
  return (
    <>
      <header class="container mx-auto px-[224px] font-open-sans">
        <div>
          <p class="text-base">
            Ingeniero en computación - Software Engineer DevOps
          </p>

          <h1 class="font-medium text-4xl bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Alan Francisco Mora
          </h1>

          <p class="font-medium text-lg mt-3">
            Hablar es barato. Muéstrame el código.
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
