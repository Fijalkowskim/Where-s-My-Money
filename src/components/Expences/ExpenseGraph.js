import React from "react";
import ExpenceGraphItem from "./ExpenceGraphItem";

function ExpenseGraph() {
  let expenses = [
    {
      value: 341,
      category: "Groccery",
      color: "#58cc77",
    },
    {
      value: 1287,
      category: "Health care",
      color: "#eb8ac6",
    },
  ];
  let total = expenses.reduce(
    (accumulator, expense) => accumulator + expense.value,
    0
  );
  return (
    <div className=" mt-20 w-5/6 bg-white h-12 shadow-sm border-2 rounded-l-full rounded-r-full overflow-hidden flex">
      {expenses.map((expence, index) => (
        <ExpenceGraphItem
          value={expence.value}
          category={expence.category}
          percent={(expence.value / total) * 100}
          color={expence.color}
        />
      ))}
    </div>
  );
}

export default ExpenseGraph;
