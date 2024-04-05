import React, { useState } from "react";
import "./createAccount.css";

const CreateNewAccountComponent = () => {
  // Step 1: Define state variables for form data
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 2: Define event handlers to update state variables
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Step 3: Define function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:1000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: name, email, phone: phoneNumber, password }),
      });

      if (!response.ok) {
        throw new Error("Account creation failed");
      }

      console.log("Account created successfully");
      // Optionally, you can redirect the user to a different page upon successful account creation
    } catch (error) {
      console.error("Error:", error.message);
      // Display alert message
      alert("An error occurred during account creation. Please try again.");
    }
  };

  return (
    <>
      <div className="create-account-container">
        <div className="logo"></div>
        <div className="create-account-form">
          <form onSubmit={handleSubmit}>
            <div className="create-account-firstbox">
              <label htmlFor="yourname">Your name</label>
              <input
                id="yourname"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="create-account-firstbox">
              <label htmlFor="your-mobileno">Your phone number</label>
              <input
                id="your-mobileno"
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            <div className="create-account-firstbox">
              <label htmlFor="your-email">email</label>
              <input
                id="your-email"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="create-account-firstbox">
              <label htmlFor="your-password">password</label>
              <input
                id="your-password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <button className="create-account-button" type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNewAccountComponent;


