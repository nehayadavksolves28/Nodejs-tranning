//Path module
const path = require('node:path')
const fs = require('fs')
const os = require('os')
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.basename(__dirname))
console.log(path.parse(__filename))
console.log(path.isAbsolute(__filename))

// fs module

fs.writeFileSync("./fileData","This the Demo File", "utf-8")
fs.readFile("./fileData","utf-8", (err,data)=>{
    console.log(data);
})
fs.appendFile("./fileData"," appended Data","utf-8",(err)=>{
    if(err){
        console.log(err)
    }
})

//os module

console.log(os.userInfo())
console.log(os.platform())
console.log(os.arch())
console.log(os.freemem())
console.log(os.cpus())

