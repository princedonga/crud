const { Country } = require("../model")

const create_country = async(req,res) => {
    try {
        const new_country = await Country.create(req.body)
        res.status(200).json({
            success: true,
            message:"Got created",
            data: new_country
        })
    } catch (error) {
      
    }
}

module.exports = {
    create_country
}