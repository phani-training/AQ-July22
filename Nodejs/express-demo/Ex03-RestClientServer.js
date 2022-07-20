const express = require("express");
const app = express();
const dir =__dirname;

app.use('/css',  express.static(dir +"/node_modules/bootstrap/dist/css"))
app.use('/js',  express.static(dir + "/node_modules/jquery/dist/"))

app.get("/", (rq, rs)=> rs.sendFile(dir +  "/ClientApp.html"));

app.listen(4321, ()=>{
    console.log("Client Hosting at 4321");
})