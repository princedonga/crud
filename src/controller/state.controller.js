const { state_Service } = require("../services")

const create_state = async(req,res) => {
    try {
        // service
        const data = req.body
        const new_state = await state_Service.create_state(data)
        res.status(200).json({
            message:"Created",
            success:true,
            data:new_state
        })
    } catch (error) {
        res.status(400).json({
            message:error.message,
            success:false
        })
    }
}

module.exports = {
    create_state
}