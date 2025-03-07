const express = require("express")
const { signup, login, logout } = require("../controllers/userController")
const route = express.Router()

route.post("/signup", signup)
route.post("/login", login)
route.post("/logout", logout)

module.exports = route