const Sector = require("../models/sectorinfo");

const sector = async(req,res)=>{
    try {
        const { id,intensity, topic,added} = req.body;
        const createdSector = Sector.create({
            id,
            intensity,
            topic,
            added
        })
        res.status(200).json({
            sucess:true,
            message:"Entry created to sector Successfully",
            createdSector,
        })
    } catch (error) {
        return res.status(400).json({
            sucess:false,
            message:"Error while creating the entry"
        })
    }
};

const getAllSectorData = async(req,res)=>{
    try {
        const allData = Sector.find({});
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
    }
}

module.exports = sector;
module.exports = getAllSectorData;