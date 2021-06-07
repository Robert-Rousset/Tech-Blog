const router = require('express').Router();
const homeRoute = require('./home');
const dashboard = require('./dashboard');
const login = require('./login')

router.use('/', homeRoute);
router.use('/dashboard', dashboard);
router.use('/login', login)

module.exports = router;
