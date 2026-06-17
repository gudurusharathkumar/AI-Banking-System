import { useState } from "react";
import axios from "axios";

function CreateAccount() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const createAccount = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8081/api/accounts/create?accountHolderName=${name}`
      );

      setMessage(response.data);
      setName("");

    } catch (error) {
      console.log(error);
      setMessage("❌ Error Creating Account");
    }
  };

  return (
    <div>

      <h2 className="section-title">
        🏦 Create Account
      </h2>

      <div className="form-row">

        <input
          type="text"
          placeholder="Enter Account Holder Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={createAccount}>
          Create Account
        </button>

      </div>

      {message && (
        <p className="success-message">
          {message}
        </p>
      )}

    </div>
  );
}

export default CreateAccount;