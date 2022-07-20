module.exports = (function(){
    let cart =[];

    function addItem(item) {
        cart.push(item)
    }

    function getAll(){ 
        return cart;
    }

    function findItem(id){
        return cart.find((p) => p.id == id);
    }
    //All members of a module class are private. U should export the class. 
    return{
        addItem, getAll, findItem
    }
});