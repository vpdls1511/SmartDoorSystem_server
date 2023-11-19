const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const api = require('./src/api')

const app = express()
const port = 8001

app.use(bodyParser.json())
/******* Options *******/
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: '*' }))

/******* Router *******/
app.use('/static', express.static('static'));
app.use('/api', api)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
