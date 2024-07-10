const express = require("express")
const { country_Controller } = require("../../controller")
const router = express.Router()

router.post(
    "/create-country",
    // cb
    country_Controller.create_country
)

module.exports = router