//Example of Named Functions
function addFunc(v1, v2) {
    let result = v1 + v2;
    return result;//return keyword is used within a function to exit it. Optionally, U can pass a value that will return to the caller of this method. 
}
//Example of Anonymous methods
const subFunc = function (v1, v2) {
    const res = v1 - v2;
    return res;
}

const mulFunc = (v1, v2) => v1 * v2;

const squareFunc = (v1) =>{
    //use {} if U have multiple statements. 
     return v1 * v1;
}

const sqrRoot = (val) => Math.sqrt(val);