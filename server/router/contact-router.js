const express = require('express');
const router = express.Router();

const contactForm = require("../controllers/contact-controller");

router.route("/contact").post(async (req, res) => {
    await contactForm(req, res);
});

module.exports = router;
