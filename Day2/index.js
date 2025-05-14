//- Create a module that exports a greeting message and import it in another file. 
const message = require('./greetingMessgae')
console.log(message)

// - Create a function that logs a message every 2 seconds using setInterval.
setInterval(()=>{
   console.log("Print in every 2 seconds")
},2000)

//Global objects
console.log(__dirname,"DIRECTORY NAME")
console.log(__filename,"DIRECTORY NAME")

