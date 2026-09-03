const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: { type: String, unique: [true, "user name should be unique"], required: [true, "user name is required."] },
    email: { type: String, unique: true, required: [true, "email is required."] },
    role: { type: String, required: true, enum: ["admin", "user"] , default : "user"},
    password: { type: String, required: [true, "password is required."] , select : false}
},
{
    timestamps : true,
    versionKey : false
})

const UserModel = mongoose.model("userModel", userSchema)

module.exports = UserModel