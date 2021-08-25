require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const app = express()
const port = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('<h1>MASUK</h1>')
})

app.use(router)

app.listen(port, () => {
    console.log(`runing on port ${port}`)
})