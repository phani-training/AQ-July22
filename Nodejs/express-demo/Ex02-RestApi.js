const app = require("express")();
const parser =require('body-parser');
const cors = require("cors")
const fs = require("fs");

let empData = [];
app.use(parser.urlencoded({extended: true}))
app.use(parser.json());//body to be json data...
app.use(cors());


const getData = ()=>{
     empData = JSON.parse(fs.readFileSync("./employees.json", "utf-8"));
}
const writeData = ()=>{
    fs.writeFileSync("./employees.json", JSON.stringify(empData), 'utf-8');
}

app.get("/EmpList", (req, res) => {
    getData();
    res.send(JSON.stringify(empData));
});

app.get("/EmpList/:id", (req, res)=>{
    const id = req.params.id;
    getData();
    const emp = empData.find((e)=>e.empId == id);
    if(emp == null) throw new Error("Employee not found");
    res.send(emp);
})

app.post("/EmpList", (req, res)=>{
 const rec = req.body;
    //get the data of the file
    getData();
    //push the rec into the array.
    empData.push(rec);
    //wrute back the data into the file.
    writeData();
    res.send("Employee inserted successfully") 
})

app.put("/EmpList", (req, res)=>{
   const rec =req.body;
   getData();
   let emp = empData.find((e)=>e.empId == rec.empId);
   if(emp == null) res.send("Employee not found");
   console.log(emp)
   let index = empData.indexOf(emp);
   empData.splice(index, 1, rec);
   console.log(rec)
   writeData();
   res.send("Employee updated successfully");
})


app.delete("/EmpList/:id", (req, res)=>{
    getData();
    const id = req.params.id;
    console.log(id)
    for (const index in empData) {
        if (empData[index].empId == id){
            empData.splice(index, 1);
            writeData();
            res.send("Employee deleted")
        }
    }
    res.send("Employee not found to delete");
})

app.listen(1234, ()=>{
    console.log("Server running at 1234")
})
