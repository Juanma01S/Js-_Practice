const uniqueId = Symbol('Id');
const symbol1 = Symbol(1);
const symbol2 = Symbol(1);

console.log(symbol1 === symbol2); // false


const ID = Symbol('id');
let user = {}
user[ID] = '123';
console.log(user); // 123