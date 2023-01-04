const express = require('express')
const router = express.Router()
const Home = require('./modules/home')
const Todo = require('./modules/todos')
const User = require('./modules/users')

router.use('/users', User)
router.use('/todos', Todo)
router.use('/', Home)

module.exports = router