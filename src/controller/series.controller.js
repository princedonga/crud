const { series_Service } = require("../services")

const create_series = async(req,res) => {
    try {
        const data = req.body
        // service
        const new_series = await series_Service.create_series_S(data)
        // success response
        res.status(200).json({
            success: true,
            data: new_series
        })
    } catch (error) {
        // error response
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const update_series = async(req,res) => {
    try {
        const id = req.params.series_id
        const data = req.body


        const result = await series_Service.update_series_S(id,data)

        if(!result){
            throw new Error("Not updated")
        }

        res.status(200).json({
            success:true,
            message:"Updated",
            data:data
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
    
}



const check_series = async(req,res) => {
    try {
        const name = req.body.series_name
        // service <= particular data
        const result = await series_Service.check_series(name)

        if(!result){
            throw new Error("Data does not exist")
        }

        res.status(200).json({
            success:true,
            message:"Data found",
            data: result
        })


    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })

    }
}



module.exports = {
    create_series,
    update_series,
    check_series
}