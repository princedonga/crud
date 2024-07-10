const mongoose = require("mongoose")

const doc_Schema = mongoose.Schema(
    {
        doc_name:{
            type:String,
            trim:true
        },
        new_key:{
            type:String,
            trim:true
        },
        doc_ep:{
            type:Number,
            default:1,
            trim:false
        }
    },
    {
        timestamps:true
    })

const doc = mongoose.model("Documentary",doc_Schema)
module.exports = doc