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
      <footer className="mt-[100px] mb-[80px] flex flex-col items-center border-t border-fuchsia-600 dark:border-lime-400">
        <p className="mt-6 font-bold text-center text-sm sm:text-xs text-fuchsia-600 dark:text-lime-400">
          Copyright {year !== null ? year : "2024"}. All right reserved by Alan
          Francisco Mora González
        </p>
      </footer>
    </>
  );
}

export default Footer;
