const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
// const { join } = require('path')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use(require('./routes'))

// handlebars setting
app.set('view engine', 'hbs')
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'index',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials'
}))

const port = 8900
app.listen(port)
console.log('Listening on server: http://localhost:8900')

// Landing page
app.get('/', (req, res) => {
  res.render('main')
})
