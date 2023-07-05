const mysql = require('mysql')
require('dotenv').config();

const db_config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  multipleStatements: true
}

let pool = mysql.createPool(db_config)

module.exports = {

  query: async (sql, params) => {
    return new Promise((resolve, rejected) => {
      pool.getConnection((err, conn) => {
        if (err)
          rejected(err)
        else
          conn.query(sql, params, (err, data) => {

            if (err) {
              console.log(sql)
              rejected(err)
            } else
              resolve(data)
            console.log('connection is returned..')
            conn.release()
          })
      })
    })
  },

  get: async () => {
    return new Promise((resolve, rejected) => {
      pool.getConnection((err, conn) => {
        if (err) rejected(err)
        else resolve(conn)
      })
    })
  },

}
