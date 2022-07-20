const express = require("express");
const parser = require("body-parser");
const app = express();
const dir = __dirname;

app.use(parser.urlencoded({extended: false}));//Request will have a body object that contains the data that is posted. 

app.use('/css',  express.static(dir +"/node_modules/bootstrap/dist/css"))
app.use('/js',  express.static(dir + "/node_modules/jquery/dist/"))

app.get("/", (req, res) => res.send("Welcome to Express training"));

app.get("/data", (req, res)=> res.send("Data is yet to be accessed!!!"))

app.get("/Register", (req, res) => res.sendFile(dir + "/Registration.html"));

app.get("/AfterSubmit", (req,res)=>{
    const email = req.query.txtEmail;
    const name = req.query.txtName;
    res.send("Thanks Mr." + name +" for registering with us!!!");
})

app.post("/AfterSubmit", (req, res)=>{
    const email = req.body.txtEmail;
    const name = req.body.txtName;
    res.send("Thanks Mr." + name +" for registering with us!!!");
})
app.listen(1234, ()=>{
    console.log("Welcome to Express training\Access our website at port 1234");
});