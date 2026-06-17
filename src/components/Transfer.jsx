import { useState } from "react";
import axios from "axios";

function Transfer() {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const transferMoney = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/accounts/transfer",
        {
          fromAccountNumber: fromAccount.trim(),
          toAccountNumber: toAccount.trim(),
          amount: Number(amount)
        }
      );

      setMessage(response.data);
    } catch (error) {
      setMessage("Transfer Failed");
    }
  };

  return (
    <div>
      <h2 className="section-title">
        🔄 Transfer Money
      </h2>

      <input
        type="text"
        placeholder="From Account"
        value={fromAccount}
        onChange={(e) => setFromAccount(e.target.value)}
      />

      <input
        type="text"
        placeholder="To Account"
        value={toAccount}
        onChange={(e) => setToAccount(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={transferMoney}>
        Transfer
      </button>

      <p>{message}</p>
    </div>
  );
}

export default Transfer;