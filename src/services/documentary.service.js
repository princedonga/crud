const { Doc } = require("../model")

const create_doc = (data) => {
    return Doc.create(data)
}

const get_list = () => {
    return Doc.find()
}

const delete_doc = (id) => {
    return Doc.findByIdAndDelete(id)
}
const update_doc = () => {
    return Doc.findByIdAndUpdate(id,data)
}
module.exports = {
    create_doc,
    get_list,
    delete_doc,
    update_doc
}