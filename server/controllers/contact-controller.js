const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        res.status(201).json({ message: "Contact created successfully" });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

module.exports = contactForm;
