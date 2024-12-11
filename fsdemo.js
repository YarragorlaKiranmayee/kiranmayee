//filesystem modu
 const fs=require('fs')
fs.readFile('abc.txt',(err,data)=>{
    if(err)console.log(err);
    else console.log(data.toString())
})

//write
fs.writeFile("xyz.txt","hi iam kiranmayee",(err)=>{
    if(err)console.log(err);
    else console.log("successfully updated")
})
//append
fs.appendFile("xyz.txt"," and iam 20",(err)=>{
    if(err)console.log(err);
    else console.log("successfully updated")
})
//delete
// fs.unlink("xyz.txt",(err)=>{
//     if(err)console.log(err);
//     else console.log("successfully deleted")
// })

// //rename
// fs.rename("xyz.txt","def.txt",(err)=>{
//     if(err)console.log(err);
//     else console.log("rename")
// })