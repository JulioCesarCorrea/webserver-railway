const express = require('express')
const app = express()

app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })
app.get('/hola-mundo',  (req, res) => {
    res.send('estamos aqui')
  })
  app.get('*', (req, res) => {
    // res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/404.html')
  })
app.listen(8080)