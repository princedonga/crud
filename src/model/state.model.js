const mongoose = require("mongoose")

const state_Schema = mongoose.Schema(
    {
        state_name:{
            type:String,
            trim:true
        }
        // populate country
    },
    {
        timestamps:true
    })

const state = mongoose.model("State",state_Schema)
module.exports = state