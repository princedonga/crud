const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router()


router.get("/end-point",
    (req,res)=>{
        res.status(200).json({
            success: true,
            message: "Route got hitted"
        })
    }
)
router.post(
    "/create-token",
    async(req,res) =>{
        try {
            const payload = req.body
            const token =await jwt.sign(payload,"SECRET")

            if(!token){
                throw new Error("Enter Valid Signature")
            }
            res.status(200).json({
                success:true,
                message:"Token genreted",
                token:token
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }
)

router.post
(
    "/decode-token",
    async(req,res) => {
        try {
            const token = req.body.token
            const data = await jwt.verify(token,"SECRET")

            if(!data){
                throw new Error("Data not Working")
            }
            res.status(200).json({
                success:true,
                data:data
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }
)

module.exports = router