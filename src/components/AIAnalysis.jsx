import React from "react";

function AIAnalysis() {
  return (
    <div>
      <h2 className="section-title">
        🤖 AI Transaction Analysis
      </h2>

      <p>Total Deposits: ₹50,000</p>
      <p>Total Withdrawals: ₹20,000</p>
      <p>Highest Transaction: ₹10,000</p>
      <p>Monthly Spending: ₹15,000</p>

      <h3>Spending Pattern Detection</h3>

      <ul>
        <li>Food Expenses: 25%</li>
        <li>Shopping Expenses: 35%</li>
        <li>Bills: 20%</li>
        <li>Transfers: 20%</li>
      </ul>
    </div>
  );
}

export default AIAnalysis;