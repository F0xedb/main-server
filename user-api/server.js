const express = require('express')
const app = express()
const user = require('./routes/user')

user(app)
 
app.listen(3000)
