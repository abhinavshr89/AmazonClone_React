import React, { useState } from "react";
import "./createAccount.css";
import { Link } from "react-router-dom";
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
      alert("Account Created Successfully")
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
        <div className="logo">
          <img src="https://press.aboutamazon.in/static-files/3ca754e0-9176-4d89-8174-056267008479" alt="" />
        </div>
        <div className="create-account-form">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit} className="--create-account-form">
            <div className="create-account-firstbox">
              <label htmlFor="yourname">Your name</label>
              <input
                id="yourname"
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={handleNameChange}
              />
            </div>
            <div className="create-account-firstbox">
              <label htmlFor="your-mobileno">Your phone number</label>
              <input
                id="your-mobileno"
                type="text"
                value={phoneNumber}
                placeholder="Enter your phone No (10 digits)"
                onChange={handlePhoneNumberChange}
              />
            </div>
            <div className="create-account-firstbox">
              <label htmlFor="your-email">email</label>
              <input
                id="your-email"
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="create-account-firstbox">
              <label htmlFor="your-password">password</label>
              <input
                id="your-password"
                type="password"
                value={password}
                placeholder=""
                onChange={handlePasswordChange}
              />
            </div>
              <h7>Already have an account <Link to="http://localhost:5173/signin">Sign in</Link> </h7>
            <button className="create-account-button" type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNewAccountComponent;


