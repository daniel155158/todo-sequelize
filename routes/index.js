const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const todo = require('./modules/todos')
const user = require('./modules/users')
const { authenticator } = require('../middleware/auth')

router.use('/users', user)
router.use('/todos', authenticator, todo)
router.use('/', authenticator, home)

module.exports = router