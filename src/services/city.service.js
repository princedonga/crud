    const { City } = require("../model")

const create_city = (data) => {
    return City.create(data)
}

module.exports = {
    create_city
}