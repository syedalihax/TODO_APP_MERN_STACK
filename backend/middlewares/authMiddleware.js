const jwt = require("jsonwebtoken")
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


        const decoded = await jwt.decode(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(403).json({
                success: false,
                message: "unAuthorized"
            })
        }
        
        req.user = decoded

        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = protected