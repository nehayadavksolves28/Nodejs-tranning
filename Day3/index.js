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

//Event Emmiter
const EventEmmiter= require("node:events");

const emitter = new EventEmmiter();
emitter.on("order-pizza", (size, toppings)=>{
    console.log(`order recieved baking a ${size} pizza with ${toppings} `);
})

emitter.on("order-pizza",(size)=>{
    if(size==="large"){
        console.log("serve complimentry drink")
    }
})//This line registers an event listener for the "order-pizza" event using the on method of the emitter object.

emitter.emit("order-pizza", "large", "mushroom");//These lines emit "order-pizza" events with different parameters.
emitter.emit("order-pizza", "small", "tommoto");

