import React, { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    const today = new Date();
    const actualYear = today.getFullYear().toString();

    setYear(actualYear);
  }, []);

  return (
    <>
      <footer className="mx-auto mt-[100px] mb-[80px] px-[300px] xl:px-10 font-open-sans flex flex-col items-center">
        <p className="mt-5 text-center text-base sm:text-sm text-fuchsia-600 dark:text-lime-300">
          Copyright {year !== null ? year : "2024"}. All right reserved by Alan
          Francisco Mora González
        </p>
      </footer>
    </>
  );
}

export default Footer;
