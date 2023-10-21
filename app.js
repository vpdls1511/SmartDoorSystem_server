const express = require('express')
const cors = require('cors')

const api = require('./src/api')

const app = express()
const port = 8001

/******* Options *******/
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ origin: '*' }))

/******* Router *******/
app.use('/static', express.static('static'));
app.use('/api', api)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
