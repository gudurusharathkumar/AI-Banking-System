import { useState } from "react";
import axios from "axios";

function Balance() {
  const [accountNumber, setAccountNumber] = useState("");
  const [balance, setBalance] = useState("");

  const checkBalance = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/api/accounts/balance?accountNumber=${accountNumber}`
      );

      setBalance(response.data);
    } catch (error) {
      setBalance("Error");
    }
  };

  return (
    <div>
      <h2 className="section-title">
        📊 Check Balance
      </h2>

      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />

      <button onClick={checkBalance}>Check</button>

      <h3>{balance}</h3>
    </div>
  );
}

export default Balance;