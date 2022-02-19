const express = require('express');
const router = express.Router();
const middleware = require('./../middleware/authenticate')


const users = require('../usersTable')
const controllers = require('./../controllers/user')

router.get('/login',middleware,controllers.login);

router.post('/signup',controllers.signup);

router.post('/reset-password',controllers.resetPassword)

module.exports = router