const express = require("express")
const { state_Controller } = require("../../controller")
const router = express.Router()

router.post(
    "/create-state",
    // cb
    state_Controller.create_state
)
// router.get(
//     "/list",
//     // cb
// )


module.exports = router