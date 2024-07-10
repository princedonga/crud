const express = require("express")
const { admin_Controller } = require("../../controller")
const { admin_validation } = require("../../validation")

const router = express.Router()

router.post(
    "/create-admin",
    // admin_validation.create_admin_V,

    admin_Controller.create_admin_C
)

router.get(
    "/list",
    // cb <= controller
    admin_Controller.get_admin_C
)

module.exports = router