const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const app = express()
const db = require('./models')
const Todo = db.Todo
const User = db.User
const PORT = 3000

// template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
// middleware
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// 進入首頁
app.get('/', (req, res) => {
  res.send('Hello world!')
})
// 進入登入頁
app.get('/users/login', (req, res) => {
  res.render('login')
})
// 提交登入資訊
app.post('/users/login', (req, res) => {
  res.send('Login ok!')
})
// 登出
app.get('/users/logout', (req, res) => {
  res.send('Logout ok!')
})
// 進入註冊頁
app.get('/users/register', (req, res) => {
  res.render('register')
})
// 提交註冊資訊
app.post('/users/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  User.create({ name, email, password })
    .then(user => res.redirect('/'))
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})