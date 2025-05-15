//CallBack

// const { resolve } = require("path");

// function task1(callback){
//     console.log("task1 executed")
//     callback();
// }

// function task2(callback){
//     console.log("task2 excuted")
//     callback()
// }

// task1(function(){
//     task2(function(){
//         console.log("both the task excuted")
//     })
// })

//Promises

// function task1(){
//     return new Promise((resolve,reject)=>{
//       console.log("task 1 completed")
//       reject();
//     })
// }

// function task2(){
//     return new Promise((resolve)=>{
//         console.log("task2 completed")
//         resolve()
//     })
// }

// task1()
// .then(()=>task2())
// .then(()=>{console.log("both")})

//async await 
 
const task1 = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{console.log("task1 completed")
            return resolve();
        },2000)
       
    })
    
}

const task2 = () => {
    console.log("task2 completed")
}

const runTask = async() => {
    await task1();
    await task2();
    console.log("both the tasks completed")
}

runTask();

