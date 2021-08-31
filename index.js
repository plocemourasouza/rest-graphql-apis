const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json(['json']))
//app.use(express.json())

app.post('/products', (req, res) => {
  console.log(req.body)
  res.send({
    success: true
  })
})

app.get('/products', (req, res) => {
  res.send({
    products: ['all products']
  })
})

app.listen(3000, err => {
  if (err) {
    console.log('Not possible to listen on port 3000')
  } else {
    console.log('Server running on port 3000')
  }
})
