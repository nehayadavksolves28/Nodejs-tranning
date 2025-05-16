
const express = require('express')

const app = express()

app.get('/',(req,res)=> {
    return res.send(`
        <div>
        <h1>Hello World</h1>
        </div>
        `)
})

app.get('/about', (req,res)=>{
    return res.send(`<div>
      <h1> This is the About Page</h1>
   </div>`);
})

app.get('/contact', (req,res)=>{
    return res.send(`<div>
      <h1> This is the Contact Page</h1>
   </div>`);
})


app.listen(3400,()=>{
    console.log("server running on port 3400")
})