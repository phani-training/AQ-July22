const cart = require("./cart")();//Instantiattion...
console.log(cart);
cart.addItem({id: 123, itemName: "TestItem", price : 4500});
cart.addItem({id: 124, itemName: "TestItem", price : 4500});
cart.addItem({id: 121, itemName: "TestItem", price : 4500});
cart.addItem({id: 120, itemName: "TestItem", price : 4500});
cart.addItem({id: 110, itemName: "TestItem", price : 4500});

const items = cart.getAll();
for (const item of items) {
    console.log(item.id)
}

items.forEach((val)=>{
    console.log(val)
})
//Display the data in table...
console.table(items);