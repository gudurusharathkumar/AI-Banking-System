import { useState } from "react";
import axios from "axios";

function Withdraw() {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const withdraw = async () => {
    try {
      const response = await axios.post(
        "https://ai-banking-system-2.onrender.com:8080/api/accounts/withdraw",
        {
          accountNumber,
          amount: Number(amount),
        }
      );

      setMessage(response.data);
    } catch (error) {
      setMessage("Withdraw Failed");
    }
  };

  return (
    <div>
      <h2 className="section-title">
        💸 Withdraw Money
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

      <button onClick={withdraw}>Withdraw</button>

      <p>{message}</p>
    </div>
  );
}

export default Withdraw;