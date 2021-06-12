const router = require('express').Router();
const homeRoute = require('./home.js');
const dashboard = require('./dashboard.js');
const login = require('./login.js')

router.use('/', homeRoute);
router.use('/dashboard', dashboard);
router.use('/login', login)

module.exports = router;
