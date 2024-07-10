const express = require("express")
const router = require("./routes/v1")
const connectDB = require("./db/dbConnection")

const app = express()

app.listen(

    8080,()=>{
        console.log("port i runing")
    }
    
)

app.use(express.json())
app.use("/v1",router)

connectDB()