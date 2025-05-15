const http = require("node:http");

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
    res.write("hello world by Neha");  
    res.end()
    }
    if(req.url === "/home"){
        res.write("Home Page")
        res.end()
    }
    if(req.url === "/about"){
        res.write("About Page")
        res.end()
    }
})

server.listen(3002, ()=>{
  console.log("server running")
})