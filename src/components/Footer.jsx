import React from "react";

function Footer() {
  return (
    <>
      <footer className="mt-[100px] mb-[80px] flex flex-col items-center border-t border-fuchsia-600 dark:border-lime-400">
        <p className="mt-6 text-sm font-bold text-center sm:text-xs text-fuchsia-600 dark:text-lime-400">
          © 2024.{" "}
          <a href="https://github.com/alanmgg" target="_blank">
            Alan Francisco Mora González
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default Footer;
