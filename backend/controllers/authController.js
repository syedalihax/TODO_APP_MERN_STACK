const bcrypt = require("bcrypt")
const validator = require("validator")
const UserModel = require("../models/userModel")

const register = async (req, res) => {
    let { userName, email, role, password } = req.body
    userName = userName.trim()
    email = email.trim()
    password = password.trim()
    userName = userName.toLowerCase()
    email = email.toLowerCase()
    if (userName=== "" || email === "" || password === "") {
        return res.status(400).json({
            success: false,
            message: "username , email , password is required"
        })
    }
    if(userName.length < 3 || userName.length > 10){
        return res.status(400).json({
            success:false,
            message: "username should be at least 3 to 10 characters."
        })
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({
            success:false,
            message: "Invalid Email"
        })
    }
    try {
        const existEmail = await UserModel.findOne({email})
        if(existEmail){
            return res.status(409).json({
                success:false,
                message : "this email is already registered please login insteed."
            })
        }
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
        if(!regexPassword.test(password)){
            return res.status(400).json({
                success:false,
                message: "password should be at least 1 capital letter , 1 small letter , 1 number and total minimum 8 characters."
            })
        }
        const hashedPassword = await bcrypt.hash(password , 10)

        const regUser = await UserModel.create({userName , email , role , password : hashedPassword})
        res.status(200).json({
            success:true,
            message: "user Registered successFully" ,
            data : regUser
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: error.message
        })
    }
}
module.exports = {register}