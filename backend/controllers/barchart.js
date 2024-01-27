const BARCHART = require("../models/barinfo");


const barchartinfo = async(req,res)=>{
    try {
        const{country,
            intensity,intensityColor,
            impact,impactColor,relevance,
            relevanceColor,
            likelihood,likelihoodColor}= req.body;
            const createdBar = await BARCHART.create({
                country:country,
                intensity:intensity,intensityColor:intensityColor,
                impact:impact,impactColor:impactColor,
                relevance:relevance,relevanceColor:relevanceColor,
                likelihood:likelihood,likelihoodColor:likelihoodColor
            })
            console.log(createdBar);
            res.status(200).json({
                success:true,
                message:"Entry of Bar create sucessfully",
                createdBar
            })
    } catch (error) {
          return res.status(401).json({
            success:false,
            message:"Error While creating the barEntry"
          })
    }
}

const getBarChatData = async(req,res)=>{
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
}

module.exports = getBarChatData,barchartinfo;