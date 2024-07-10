const joi = require("joi")


const create_admin_V = async(req,res,next) => {
    try {
        const ideal_object = joi.object({
            admin_name:joi.string().required().trim().min(4),
            admin_contact:joi.number().required(),
        })

        const result = await ideal_object.validate(req.body)

        if(result.error){
            throw new Error("validation error")
        }

        res.status(200).json({
            message:"validation file"
        })
        
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}


module.exports = {
    create_admin_V
}