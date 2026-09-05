const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const validator = require("validator")
const UserModel = require("../models/userModel")
const TokenModel = require("../models/tokenModel")

const register = async (req, res) => {
    let { userName, email, role, password } = req.body
    if (!role) {
        role = "user"
    }
    userName = userName.trim()
    email = email.trim()
    password = password.trim()
    userName = userName.toLowerCase()
    email = email.toLowerCase()
    if (userName === "" || email === "" || password === "") {
        return res.status(400).json({
            success: false,
            message: "username , email , password is required"
        })
    }
    if (userName.length < 3 || userName.length > 10) {
        return res.status(400).json({
            success: false,
            message: "username should be at least 3 to 10 characters."
        })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Email"
        })
    }
    try {
        const existEmail = await UserModel.findOne({ email })
        if (existEmail) {
            return res.status(409).json({
                success: false,
                message: "this email is already registered please login insteed."
            })
        }
        const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
        if (!regexPassword.test(password)) {
            return res.status(400).json({
                success: false,
                message: "password should be at least 1 capital letter , 1 small letter , 1 number and total minimum 8 characters."
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const regUser = await UserModel.create({ userName, email, role, password: hashedPassword })


        res.status(200).json({
            success: true,
            message: "user Registered successFully",
            data: { userName, email, role, id: regUser._id }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const login = async (req, res) => {
    let { email, password } = req.body
    email = email.trim()
    email = email.toLowerCase()
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "email and password is required"
        })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({
            success: false,
            message: "inValid email"
        })
    }
    try {
        const existEmail = await UserModel.findOne({ email }, " +password")

        if (!existEmail) {
            return res.status(404).json({
                success: false,
                message: "invalid email or password"
            })
        }
        const matchPassword = await bcrypt.compare(password, existEmail.password)
        if (!matchPassword) {
            return res.status(400).json({
                success: false,
                message: "invalid email or password"
            })
        }
        const payload = { id: existEmail._id }
        const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "3m" })

        res.status(200).json({
            success: true,
            message: "login SuccessFully",
            data: { userName: existEmail.userName, email: existEmail.email, role: existEmail.role, id: existEmail._id },
            token
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}
const logOut = async (req, res) => {
    console.log(req.user)

    let token = req.token
    let expiresAt = new Date(req.user.exp * 1000)

    try {
        const removeToken = await TokenModel.create({ token, expiresAt })
        res.status(200).json({
            success: true,
            message: "token blacklisted"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })

    }

}
module.exports = { register, login, logOut }