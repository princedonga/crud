const express = require("express")
const { city_Controller } = require("../../controller")
const router = express.Router()

router.post(
    "/create-city",
    city_Controller.create_city
    // cb
)
router.get(
    "/list",
    // cb
    city_Controller.get_list
)


module.exports = router