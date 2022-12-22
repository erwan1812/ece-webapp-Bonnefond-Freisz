const express = require('express')
const app = express()
const products = require('./handles.js')



app.set('port', 8080)

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)
app.use(express.json()) // parse json body content

app.post('/api/products', (req, res) => {
  const newProduct = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price
  }
  products.push(newProduct)
  res.status(201).json(newProduct)
})

