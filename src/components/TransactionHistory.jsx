import { useState } from "react";
import axios from "axios";

function TransactionHistory() {
  const [accountNumber, setAccountNumber] = useState("");
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/transactions/account?accountNumber=${accountNumber.trim()}`
      );

      setTransactions(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch transactions");
    }
  };

  return (
    <div>
      <h2 className="section-title">
        📜 Transaction History
      </h2>

      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />

      <button onClick={getTransactions}>
        View
      </button>

      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.transactionType} - ₹{t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;