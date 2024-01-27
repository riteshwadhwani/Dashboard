const mongoose = require("mongoose");

const sectorSchema = new mongoose.Schema({
    id:{
        type:String,
    },
    intensity: {
        type:Number
    },
    topic: {
        type:String,
    },
    added: {
        type:String,
    },
});

module.exports = mongoose.model("Sector",sectorSchema);