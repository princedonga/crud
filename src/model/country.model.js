const mongoose = require("mongoose")

const country_Schema = mongoose.Schema(
    {
        country_name:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true
    })

const country = mongoose.model("Country",country_Schema)
module.exports = country