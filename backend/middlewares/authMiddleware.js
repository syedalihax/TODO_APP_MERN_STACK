const jwt = require("jsonwebtoken")
const TokenModel = require("../models/tokenModel")
const protected = async (req, res, next) => {

    const authorization = req.headers.authorization
    try {
        if (!authorization) {
            return res.status(400).json({
                success: false,
                message: "token is required"
            })
        }

        if (!authorization.startsWith("Bearer ")) {
            return res.status(403).json({
                success: false,
                message: "invalid token"
            })
        }
        const token = authorization.split(" ")[1]

        const isblacklisted = await TokenModel.findOne({ token })
        if (isblacklisted) {
            return res.status(403).json({
                success: false,
                message: "you were logout"
            })
        }
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(403).json({
                success: false,
                message: "unAuthorized"
            })
        }
        req.token = token
        req.user = decoded

        next()
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "token has expired"
            })
        }

        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = protected