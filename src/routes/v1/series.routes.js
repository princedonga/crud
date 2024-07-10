const express = require("express")
const { series_Controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-series",
    // controller
    series_Controller.create_series
)

router.put(
    "/update-series/:series_id",
    // cb
    series_Controller.update_series
)

router.post(
    "/check",
    // cb
    series_Controller.check_series
)

module.exports = router