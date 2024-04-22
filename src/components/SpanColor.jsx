import React from "react";

function SpanColor({ label }) {
  return (
    <>
      <span className="font-bold text-fuchsia-600 dark:text-lime-400">
        {label}
      </span>
    </>
  );
}

export default SpanColor;
