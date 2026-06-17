import { useState } from "react";
import axios from "axios";

function DeleteAccount() {

  const [accountNumber, setAccountNumber] = useState("");
  const [message, setMessage] = useState("");

  const deleteAccount = async () => {
    try {

      const response = await axios.delete(
        `http://localhost:8081/api/accounts/delete?accountNumber=${accountNumber}`
      );

      setMessage(response.data);

    } catch (error) {

      console.error(error);
      setMessage("Delete Failed");
    }
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