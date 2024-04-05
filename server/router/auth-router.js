const express = require('express');
const router = express.Router();
const pageController = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const validate = require('../middlewares/validate-middleware');


// Home page route
router.get('/', pageController.home);

// Register page route
router
.route('/register')
.post(validate(signupSchema),pageController.register);


router.route("/login").post(pageController.Login);
module.exports = router;

// batman@123344   abcddfgdf