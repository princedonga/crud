const { State } = require("../model")

const create_state = (data) => {
    return State.create(data)
}

module.exports = {
    create_state
}