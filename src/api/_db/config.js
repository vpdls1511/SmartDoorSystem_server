const mysql = require('mysql')
require('dotenv').config();

let db_config = {
  host : process.env.DB_HOST,
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  port : process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  multipleStatements: true
}

let db

function handleDisconnect() {

  db = mysql.createConnection(db_config)
  db.connect(function(err) {
    if(err) {
      console.log('error when connecting to db:', err)
      setTimeout(handleDisconnect, 2000)
    }
  })

  db.on('error', function(err) {
    console.log('db error', err)
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect()
    } else {
      throw err
    }
  })
}

handleDisconnect()

module.exports = db
