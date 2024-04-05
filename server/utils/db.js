const mongoose = require('mongoose');

const URI = "mongodb+srv://user_abhi:abhi1234@cluster0.qokpx7u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//Here i am connected to an already existing database named ecomwebsite
//But what will be the name of the collection inside the database?
//The answer to this question will be in the models schema program ... we created a model
// named Member so tha name of the collection is members which is present inside the ecomwebsite database
const URL= "mongodb+srv://user_abhi:abhi1234@cluster0.qokpx7u.mongodb.net/ecomwebsite";


const connectDb = async()=>{
    try{
        await mongoose.connect(URL);
        console.log("Connected to MongoDB");
    }catch(error){
         console.log(error);
         process.exit(0);
    }
}

module.exports = connectDb;