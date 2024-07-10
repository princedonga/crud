const { movie_Service } = require("../services")

const create_movie = async(req,res) => {
    try {
        // Movie create in back-end
        // service

        // console.log(req.body)

        const new_movie = await movie_Service.create_movie_S(req.body)

        res.status(200).json({
            success: true,
            data: new_movie
        })
    } catch (error) {
        // try block error response
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_movie
}