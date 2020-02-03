require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DEVELOPMENT_DATABASE_USER,
    password: process.env.DEVELOPMENT_DATABASE_PASSWORD,
    database: process.env.DEVELOPMENT_DATABASE,
    host: 'localhost',
    dialect: 'postgres'
  }
}
