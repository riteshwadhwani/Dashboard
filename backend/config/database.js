const mongoose = require("mongoose");
require("dotenv").config();
const connectWithDb = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("Server connected tp mongoDB")})
    .catch((error)=>{console.log(error);
    console.log("Error while connection to DB")})
}

module.exports = connectWithDb;