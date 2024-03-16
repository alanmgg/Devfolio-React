import React from "react";

function SpanColor({ label }) {
  return (
    <>
      <span className="text-fuchsia-600 dark:text-lime-300 font-bold">
        {label}
      </span>
    </>
  );
}

export default SpanColor;
