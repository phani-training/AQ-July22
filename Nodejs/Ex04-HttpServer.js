//Http is a popular JS Module of Nodejs used to create Web servers in Nodejs. 
const http = require("http");
const fs = require("fs");

const myData = require("./MyData.json");
const data =[
    {id: 111, title: "Book 1", author : "author 1", price : 560},
    {id: 111, title: "Book 1", author : "author 1", price : 560},
    {id: 111, title: "Book 1", author : "author 1", price : 560},
    {id: 111, title: "Book 1", author : "author 1", price : 560},
    {id: 111, title: "Book 1", author : "author 1", price : 560}
]
const dir = __dirname;

http.createServer((req, res)=>{
    if(req.url == "/Data"){
        res.write(JSON.stringify(myData));
    }else if(req.url == "/View"){
        const file = dir + "\\Ex05-Client.html";
        console.log(file)
        fs.createReadStream(file).pipe(res);
        return;
    }else
        res.write("Testing HTTP CODE");
    res.end();
}).listen(1234);