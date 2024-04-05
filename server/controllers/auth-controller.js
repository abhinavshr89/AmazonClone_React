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
const Login= async (req,res)=>{
    try{
      const {email,password}= req.body;

      const userExist = await Member.findOne({ email: email});
      if(!userExist){
        return res.status(400).json({message: "Invalid Credentials"});
      }

      //Now we need to compare the password 
      const user = await bcrypt.compare(password, userExist.password);
    if(user){
        res.status(200)
      .json({ message: "login Successful",});
    }else{
        res.status(401).json({message : "Ivalid email or password"});
    }


    }catch(error){
        res.status(500).json('Internal Server Error');
    }
}

// Export the controller functions
module.exports = { home, register, Login };
