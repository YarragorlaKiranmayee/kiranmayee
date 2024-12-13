const studentcon = require('../Control/studentcontrol')
const express = require('express')
const routes = express.Router()
routes.post('/add-student',studentcon.insertstudent)
routes.get('/get-student',studentcon.findStudent)
routes.put('/put-student/:branch',studentcon.updatestudent)

module.exports=routes