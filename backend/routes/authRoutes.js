const { register, login, logOut } = require("../controllers/authController")
const express = require("express")
const protected = require("../middlewares/authMiddleware")
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", protected ,logOut)

module.exports = router
