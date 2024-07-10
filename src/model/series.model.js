const mongoose = require("mongoose")

const series_Schema = mongoose.Schema(
    {
        series_name:{
            type:String,
            trim:true
        },
        new_key:{
            type:String,
            trim:true
        },
        series_rating:{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    })

const series = mongoose.model("Series",series_Schema)
module.exports = series