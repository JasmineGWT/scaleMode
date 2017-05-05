const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()

app.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))

app.use('/', routes)

module.exports = app
