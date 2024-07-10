const express = require("express")
const router = express.Router()
const { bcrypt_Controller } = require("../../controller")


router.post(
    "/hash_generate",
    bcrypt_Controller.create_bcrypt
)

router.post(
    "/hash-compare/:password",
    bcrypt_Controller.check_hash
)
module.exports = router