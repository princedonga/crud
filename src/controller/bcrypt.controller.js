const bcrypt = require("bcrypt")

const create_bcrypt = async (req, res) => {
    try {
        const password = req.body.password
        const hash_password = await bcrypt.hash(password, 5)

        if (!hash_password) {
            throw new Error
                ("not working")
        }
        res.status(200).json({
            success: true,
            data: hash_password
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const check_hash = async (req, res) => {
    try {
        const try_password = req.params.password

        const hash_to_check = "$2b$05$W7R9M/2z1LQTTC9Uu0pQw.y7SVLCwDs70g4Bsgj364G3ktlEN./7q"
        const result = await bcrypt.compare(try_password,hash_to_check)

        if (!result) {
            throw new Error("not mathch")
        }

        res.status(200).json({
            success: true,
            result: result
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

module.exports = {
    create_bcrypt,
    check_hash
}