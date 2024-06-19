const express = require('express');
const app = express();
const router = require("./router/auth-router");
const connectDb = require("../server/utils/db");
const contactRoute = require("./router/contact-router");
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use('/api/v1', router);
app.use('/api/form', contactRoute); // Added a forward slash (/) before 'api/form'

connectDb().then(() => {
    app.listen(1000, () => {
        console.log('Example app listening on port 1000!');
    });
});

