const mongoose = require("mongoose");

const barSchema = new mongoose.Schema({
    country: {
        type:String,
        required:true
    },
    intensity: {
        type:Number,
        required:true
    },
    intensityColor: {
        type:String,
        required:true
    },
    impact: {
        type:Number,
        required:true
    },
    impactColor: {
        type:String,
        required:true
    },
    relevance: {
        type:Number,
        required:true
    },
    relevanceColor:{
        type:String,
        required:true
    },
    likelihood: {
        type:Number,
        required:true
    },
    likelihoodColor: {
        type:String,
        required:true
    },
});

module.exports = mongoose.model("BARCHART",barSchema);