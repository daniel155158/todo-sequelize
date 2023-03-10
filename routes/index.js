const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const todo = require('./modules/todos')
const user = require('./modules/users')
const auth = require('./modules/auth')
const { authenticator } = require('../middleware/auth')

router.use('/users', user)
router.use('/todos', authenticator, todo)
router.use('/auth', auth)
router.use('/', authenticator, home)

module.exports = router