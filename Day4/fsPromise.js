const fs = require('fs/promises')

// const fileasyncOpe = async() => {
//     await fs.writeFile('fileOne', 'Promise Resolved File', 'utf-8')
// }

// const fileasyncOpe = async() => {
//     await fs.appendFile('fileOne', 'Promise Resolved File', 'utf-8')
// }

const fileasyncOpe = async() => {
  const data=   await fs.readFile('fileOne', 'utf-8')
  console.log(data);
}

fileasyncOpe();