const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const routes = require('./routers/studentRouter')
const app = express()

dotenv.config()
mongoose.connect(process.env.URI)
.then(()=>{
    console.log("Database connected")
})
.catch((err)=>{
    console.log("error in connecting with database",err)
})
app.use(bodyparser.json())
app.use('/',routes)
app.listen(5050,()=>{
    console.log("Server Strated")
})

