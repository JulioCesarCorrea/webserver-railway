const express = require('express')
var hbs = require('hbs')
require('dotenv').config()

const app = express()

//handlebars
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')




app.use(express.static('public'))


app.get('/', (req, res) => {
  // res.send('404 | Page not found')
  res.render('home',{
    nombre: 'Julio Correa',
    titulo: 'Curso de Node'
  })
})

app.get('/generic', (req, res) => {
  // res.send('404 | Page not found')
  res.render('generic',{
    nombre: 'Sebas',
    titulo: 'Curso de Node'
  })
})
app.get('/elements', (req, res) => {
  // res.send('404 | Page not found')
  res.render('elements',{
    nombre: 'Julio Correa',
    titulo: 'Curso de Node'
  })
})
app.get('*', (req, res) => {
  // res.send('404 | Page not found')
  res.render('404')
})
app.listen(8080)