import { useState } from "react";
import axios from "axios";

function TransactionHistory() {

  const [accountNumber, setAccountNumber] = useState("");
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {

    const response = await axios.get(
      `https://ai-banking-system-2.onrender.com/api/accounts/transactions?accountNumber=${accountNumber}`
    );

    setTransactions(response.data);
  };

  return (
    <div>
      <h2 className="section-title">
        📜 Transaction History
      </h2>

      <input
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
            {t.transactionType} -
            {t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;