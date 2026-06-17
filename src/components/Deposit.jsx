import { useState } from "react";
import axios from "axios";

function Deposit() {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const deposit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/accounts/deposit",
        {
          accountNumber,
          amount: Number(amount),
        }
      );

      setMessage(response.data);
    } catch (error) {
      setMessage("Deposit Failed");
    }
  };

  return (
    <div>
      <h2 className="section-title">
        💰 Deposit Money
      </h2>

      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={deposit}>Deposit</button>

      <p>{message}</p>
    </div>
  );
}

export default Deposit;