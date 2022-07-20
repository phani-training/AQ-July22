//Exporting functions, classes and other data is done using modules. This is based on Common.js module which is a JS framework for creating Dll-equivalents. 

module.exports.table  = function(num){
    console.log(`Multiplication Table for ${num}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`)
    }
    console.log("End of the table")
}

module.exports.addFunc = (v1,v2) => v2 + v1;
