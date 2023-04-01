const express = require('express')
const cors =  require('cors')

const app = express()
app.use(cors())
const port = 3030


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/masterdata', (req, res) => {
    console.log('DATA received')
    res.json({name:"Ingo", app:"antsnature App", beschreibung:"API-Abfrage via REACT"})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})