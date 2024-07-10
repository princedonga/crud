const { Series } = require("../model")

const create_series_S = (data) => {
    return Series.create(data)
}

const update_series_S = (id,data) => {
    return Series.findByIdAndUpdate(id,data)
}

const check_series = (series_name) => {
    return Series.findOne({series_name})
}

module.exports = {
    create_series_S,
    update_series_S,
    check_series
}