import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  // Step 2: Create state variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 3: Define event handlers to update state variables
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Step 4: Access state variables for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:1000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error("Login failed");
      }
  
      // Handle successful login
      console.log("Login successful");
      // Redirect user to localhost:5173/
      window.location.href = "http://localhost:5173/";
    } catch (error) {
      console.error("Error:", error.message);
      // Display alert message
      alert("An error occurred during login. Please try again.");
    }
  };
  return (
    <>
      <div className="main-signin-container">
        <div className="logo-container"></div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="login-form-firstbox">
              <label htmlFor="email-or-phone">
                Email or mobile phone number
              </label>
              {/* Step 3: Attach onChange event handler */}
              <input
                id="email-or-phone"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="login-form-secondbox">
              <label htmlFor="password">Your password</label>
              {/* Step 3: Attach onChange event handler */}
              <input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <button
              className="login-button"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>

            {/* Step 4: No need for Link tag for form submission */}
            <Link to="http://localhost:5173/create">
              <button className="new-customer-button">
                I am a new customer
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
