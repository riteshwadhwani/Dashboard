const express= require("express");
const router = express.Router();
const BARCHART = require("../models/barinfo")
const Sector = require("../models/sectorinfo")

// const barchartinfo = require("../controllers/barchart");
// const getBarChatData = require("../controllers/barchart");
// const sector = require("../controllers/sector");
// const getAllSectorData = require("../controllers/sector");
router.post("/createbar",async(req,res)=>{
    try {
        const {country,
        intensity,
        intensityColor,
        impact,
        impactColor,
        relevance,
        relevanceColor,
        likelihood,
        likelihoodColor} = req.body;
        const createdBar = await BARCHART.create({
            country,intensity,intensityColor,impact,impactColor,relevance,
            relevanceColor,likelihood,
            likelihoodColor
        });
        res.status(200).json({
            createdBar
        })

    } catch (error) {
          return res.status(401).json({
            success:false,
            message:"Error While creating the barEntry"
          })
    }
});
router.post("/sector",async(req,res)=>{
    try {
        const {id,intensity,topic,added} = req.body;
        const created = await Sector.create({
            id,intensity,topic,added
        })
        res.status(200).json({
            created
        })
    } catch (error) {
        return res.status(400).json({
            sucess:false,
            message:"Error while creating the entry"
        })
    }});
router.get("/allbardata",async(req,res)=>{
    try {
        const allData = await BARCHART.find({});
        if(!allData){
            return res.status(500).json({
                success:false,
                message:"No data found"
            })
        }
        // console.log(allData);
        res.status(200).json({
            success:true,
            allData
        })
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"error while fetching all bar data"
        })
    }
});
router.get("/allsectordata",async(req,res)=>{
    try {
        const allData = await Sector.find({});
        if(!allData){
            return res.status(500).json({
                sucess:false,
                message:"Error While fetching the Sector Data",
            })
        }
        res.status(200).json({
            sucess:true,
            message:"Sucessfully fetched all data",
            allData,
        })
    } catch (error) {
        return res.status(401).json({
            sucess:false,
            message:"Error while fetching the sector DATA",
        })
    }});

module.exports = router;
