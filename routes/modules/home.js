const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo

// 進入首頁
router.get('/', (req, res) => {
  const UserId = req.user.id
  return Todo.findAll({
    raw: true,
    nest: true,
    where: {
      UserId: UserId
    }
  })
    .then((todos) => { return res.render('index', { todos: todos }) })
    .catch((error) => { return res.status(422).json(error) })
})

module.exports = router