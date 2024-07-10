const { City } = require("../model")
const { city_Service } = require("../services")

const create_city = async(req,res) => {
    try {
        // service
        const data = req.body
        const new_city = await city_Service.create_city(data)
        res.status(200).json({
            message:"Created",
            success:true,
            data:new_city
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}


const get_list = async(req,res) => {
    try {
        // service
        const list = await City.find().populate("state_key_custom").populate("country")
        res.status(200).json({
            message:"Dispatch",
            success:true,
            data:list
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

module.exports = {
    create_city,
    get_list
}