const express = require("express")
const { doc_Controller } = require("../../controller")

const router = express.Router()

router.post(
    "/create-doc",
    doc_Controller.create_doc
)
router.get(
    "/list",
    doc_Controller.get_doc
)
router.delete(
    "/delete/:id",
    doc_Controller.delete_doc
)
router.put(
    "/update-doc",
    doc_Controller.update_doc
)

module.exports = router