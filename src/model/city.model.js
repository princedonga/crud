const mongoose = require("mongoose")

const city_Schema = mongoose.Schema(
    {
        city_name:{
            type:String,
            trim:true
        },
        // populate state
        state_key_custom:{
            type:mongoose.Types.ObjectId,
            ref:"State"
        },
        country:{
            type:mongoose.Types.ObjectId,
            ref:"Country"
        }
    },
    {
        timestamps:true
    })

const city = mongoose.model("City",city_Schema)
module.exports = city