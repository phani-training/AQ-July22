const fs = require("fs");//For std modules of nodejs U will not include ./
const os =require("os");
// const data = fs.readFileSync("./cart.js", 'utf-8');
// console.log(data)


// fs.readFile("./cart.js", "utf-8", (err, data)=>{
//     if(err){
//         console.error(err)
//     }else{
//         console.log(data)
//     }
// });
// console.log("Testig code")

// fs.writeFileSync("SampleFile.txt", "Content for the file", "utf-8");//Creates a new file or overwrites the existing file

// fs.appendFileSync("SampleFile.txt", "\nContent for the file to apend", "utf-8");//Opens or creates a file and add the content. 

console.log(os.userInfo());
console.log(os.version());
console.log(os.hostname());
console.log(os.uptime()/3600);
//console.log(os.cpus());
console.log(os.cpus().length);
console.log(os.totalmem() + " is the total memory")
