let food = [`Pizza`, `Burger`, `Wrap`, `kebab`, `Chicken`, `Beef`];

// add item in last list
//food.push(`Pasta`);;

//remove iteem in last list
//food.pop();

//removes specific item in list
//let slice = food.slice(0, 2);  // you print out slice as var

//adds item if first list
//food.unshift(`Chocolate`);

//removes item from first list
//food.shift();

//keeps what item in list you want and deletes other item
let slice = food.splice(1, 2);

console.log(slice);