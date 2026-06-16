import { useState } from "react";
import axios from "axios";

function DeleteAccount() {

  const [accountNumber, setAccountNumber] = useState("");
  const [message, setMessage] = useState("");

  const deleteAccount = async () => {

    const response = await axios.delete(
      `https://ai-banking-system-2.onrender.com/api/accounts/delete?accountNumber=${accountNumber}`
    );

    setMessage(response.data);
  };

  return (
    <div>
      <h2 className="section-title">
        🗑️ Delete Account
      </h2>

      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) =>
          setAccountNumber(e.target.value)
        }
      />

      <button onClick={deleteAccount}>
        Delete
      </button>

      <h3>{message}</h3>
    </div>
  );
}

export default DeleteAccount;