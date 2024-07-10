const { Admin } = require("../model")

const create_admin_S = (data) => {
    return Admin.create(data)
}

const get_admin_S = () => {
    return Admin.find()
}

module.exports = {
    create_admin_S,
    get_admin_S
}