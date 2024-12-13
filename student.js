const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    branch:{type:String,required:true},
    age:{type:Number}
})
module.exports = mongoose.model('student',studentSchema)