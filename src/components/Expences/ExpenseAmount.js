import React from "react";

function ExpenseAmount({ amount, currency }) {
  return (
    <div className=" text-8xl text-green-400 mt-4">
      {amount} {currency}
    </div>
  );
}

export default ExpenseAmount;
