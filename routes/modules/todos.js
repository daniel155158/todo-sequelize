const express = require('express')
const router = express.Router()
const db = require('../../models')
const Todo = db.Todo

// 進入新增頁面
router.get('/new', (req, res) => {
  res.render('new')
})
// 新增一筆todo
router.post('/', (req, res) => {
  const UserId = req.user.id
  const name = req.body.name
  return Todo.create({ name, UserId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 查詢todo
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

module.exports = router