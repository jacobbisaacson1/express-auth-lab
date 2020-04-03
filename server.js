require('dotenv').config()
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
// const session = require('express-session')
const PORT = process.env.PORT

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))
// server.use(session({
// 	secret: process.env.SESSION_SECRET,
// 	resave: false,
// 	saveUnitialized: false
// }))











server.listen(PORT, () => {
  const d = new Date()
  console.log(`${d.toLocaleString()}: Server listening on port ${PORT}`);
})