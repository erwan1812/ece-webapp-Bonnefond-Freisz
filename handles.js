const express = require('express')
const app = express()

app.get(
  '/hello/:name' ,function (req, res) {
    res.send("Hello " + req.params.name)
  }
)

app.post('/', (req, res) => {
  // POST
})

app
  .put('/', function (req, res) {
    // PUT
  })
  .delete('/', (req, res) => {
    // DELETE
  })