import React from "react";
import ExpenseAmount from "./Expences/ExpenseAmount";
import ExpenseGraph from "./Expences/ExpenseGraph";

function MainExpenseDisplay() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className=" text-4xl">This month you spent:</div>
      <ExpenseAmount amount={2000} currency={"$"} />
      <ExpenseGraph />
    </div>
  );
}

export default MainExpenseDisplay;
