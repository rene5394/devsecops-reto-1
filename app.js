const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Esta es la página de inicio del reto 1 DevSecOps')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
