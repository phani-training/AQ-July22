// const table = require("./table");

const allFunctions = require("./table");//Get the reference of all the functions in the module

//const table = require("./table").table;
//const addFunction = require("./table").addFunc;

function testFunc(){
    return "Hello world"
}

const addFunc = (v1, v2) => v1 +v2;

console.log(allFunctions.addFunction(13,12))

console.log(testFunc());

console.log(addFunc(123,23));

allFunctions.table(5);//calling the exported method...