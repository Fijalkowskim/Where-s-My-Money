import React from "react";

function ExpenceGraphItem({ value, category, percent, color }) {
  return (
    <div
      className="h-full flex items-center justify-center text-gray-700 "
      style={{ width: `${percent}%`, background: color }}
    >
      {category}
    </div>
  );
}

export default ExpenceGraphItem;
