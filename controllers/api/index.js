const router = require("express").Router();
const login = require('./userLogin.js')

router.use('/users', login)

module.exports = router