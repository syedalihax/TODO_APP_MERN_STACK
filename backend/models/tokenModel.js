const mongoose = require("mongoose")

const tokenSchema = new mongoose.Schema({

    token: {
        type: String,
        required: [true, "token is required"],
        unique: true
    },
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 }
    }
})

const TokenModel = mongoose.model("tokenModel", tokenSchema)

module.exports = TokenModel