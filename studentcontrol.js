const student = require('../model/student')
const insertstudent = async(req,res)=>{
const{name,branch,age}=req.body
try{
    const obj=new student({name,branch,age})
    await obj.save()
    res.status(200).json(obj)
}
catch(err){
    console.log("error",err)
    res.status(500).json({message:"error"})
}
}
const findStudent = async(req,res)=>{
    try{
        const obj = await student.find()
        res.status(200).json(obj)
    }
    catch(err){
        console.log("error",err)
        res.status(500).json({message:"error"})
    }
}
const updatestudent = async(req,res)=>{
    try{
        const {name,branch,age}=req.body
        const obj = await student.findByIdAndUpdate(req.params.id,{name,branch,age},{new:true})
        res.status(200).json(obj)
    }
    catch(err){
        console.log("error",err)
        res.status(500).json({message:"error"})
    }
}
module.exports = {insertstudent,findStudent,updatestudent}