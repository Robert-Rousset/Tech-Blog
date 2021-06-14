const router = require('express').Router();
const homeRoute = require('./home.js');
const dashboard = require('./dashboard.js');
const loginRoute = require('./login')
const apiRoute = require('./api');

router.use('/api', apiRoute);
router.use('/', homeRoute);
router.use('/dashboard', dashboard);
router.use('/login', loginRoute)


module.exports = router;
