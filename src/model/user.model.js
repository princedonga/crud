const mongoose = require("mongoose")

const user_Schema = mongoose.Schema(
    {
        // keys
        first_name:{
            type:String,
            trim:true
        },
        last_name:{
            type:String,
            trim:true
        },
        email:{
            type:String,
            trim:true
        }
    },
    {
        // 1 unique || functionality key
        timestamps:true
    })

const user = mongoose.model("User",user_Schema)

module.exports = user