 // Import the Member model
const Member = require("../models/user-model");

const bcrypt = require("bcrypt");

// Controller function for the home page
const home = (req, res) => {
  res.status(200).send("Welcome to the Home page");
};

// Controller function for user registration
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if user already exists
    const userExists = await Member.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hash the paswords
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    // Create new user
    const userCreated = await Member.create({
      username,
      email,
      phone,
      password,
    });

    // Send success response
    res
      .status(200)
      .json({ message: "User created successfully", user: userCreated });

    console.log(req.body);
  } catch (error) {
    // Send error response
    res.status(500).json({ message: error.message });
  }
};

// Controller function for the user Login
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const userExist = await Member.findOne({ email: email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // Compare the provided password with hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, userExist.password);

    if (isPasswordValid) {
      // Login successful, return username along with success message
      res.status(200).json({
        message: "Login Successful",
        username: userExist.username, // Assuming username is a field in your Member model
        exists:true
      });
    } else {
      // Password does not match
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    // Server error
    console.error("Login Error:", error);
    res.status(500).json('Internal Server Error');
  }
};

// Export the controller functions
module.exports = { home, register, Login };
