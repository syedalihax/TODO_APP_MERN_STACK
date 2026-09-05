const UserModel = require("../models/userModel")

const profile = async (req, res) => {

    const id = req.user.id
    console.log(id)
    try {
        const userData = await UserModel.findById(id)
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "profile fetch successFully",
            userData
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = profile