//Function to get value of a valid Input Element .
const getInputValue = function(id){
    return document.getElementById(id).value;
}

//Function to set value for a valid Input Element
const setInputValue = function(id, value){
    document.getElementById(id).value = value;
}

//Function to get the Element with a matching Id.
const getElement = (id) => document.getElementById(id);

const dateFormat = (dt) => `${dt.getDate()}-${dt.getMonth() +1}-${dt.getFullYear()}`;
