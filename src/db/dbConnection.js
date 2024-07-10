const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect("mongodb+srv://princedonga41:oXfz1LR7sA1tKxXk@cluster0.wwebhwh.mongodb.net/").then((data)=>{
        if(data){
            console.log("Database connected successfully ^-^")
        }
    }).catch((err)=>{
        console.log(err);
    })
}


module.exports = connectDB