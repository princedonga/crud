const mongoose = require("mongoose")

const admin_Schema = mongoose.Schema(
    {
        // key
        admin_name: {
            type:String,
            trim:true,
            default:"ADMIN"
        },
        admin_contact:{
            type:Number,
            default:0
        }
    },
    {
        timestamps: true
    })

const admin = mongoose.model("Admin",admin_Schema)

module.exports = admin