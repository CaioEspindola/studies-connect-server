const express = require('express')

const app = express()
app.use(express.json())

const port = process.env.PORT || 3001

const users = [
  {
    name: 'Mario',
    age: 42
  }
]

app.get('/usuarios', function (req, res) {
  res.json(users)
  /*   console.log(req.params)
  res.send('Hello Fucking World!') */
})

app.post('/usuarios', function (req, res) {
  /* console.log(req.body) */

  const newUser = req.body
  users.push(newUser)

  res.status(201).json(newUser)
})

app.listen(3001, () => {
  console.log('Servidor esta Rodando! Porta 3001')
})
