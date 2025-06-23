const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Esta es la página de inicio del reto 1 DevSecOps')
})

app.get('/api/users', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com'
    },
    {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com'
    }
  ])
})

app.get('/api/orders', (req, res) => {
  res.json([
    {
      id: 101,
      userId: 1,
      items: [
        { productId: 201, name: 'Laptop', quantity: 1, price: 1200 },
        { productId: 202, name: 'Mouse', quantity: 2, price: 25 }
      ],
      total: 1250,
      status: 'Shipped'
    },
    {
      id: 102,
      userId: 2,
      items: [
        { productId: 203, name: 'Phone', quantity: 1, price: 800 }
      ],
      total: 800,
      status: 'Processing'
    }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
