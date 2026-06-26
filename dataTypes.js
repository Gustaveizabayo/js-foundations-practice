// Data Types
//1.Number
let n = 123;
n = 12.345;

alert(1 /0 ) //infinity
alert('not a number' / 2) //NaN

//2.BigInt
console.log(9000799966777663321  +1 )
console.log(789999557789 + 2)

//3.string
let str = "Hello";
let str2 = 'Single quotes'
let phrase = `can embed another ${str}`; // temperate literals

let name = "john";

alert (`hello, ${name}!`); //hello johm!

alert(`the result is ${1 + 3}`) //4
//4.boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
alert(isGreater);


//5. null
let age = null; //value does not  belong any type or  is  empty
//6.undefined

let age;
alert(age); //undefined

let age = 100;
age = undefined;
alert(age); //undefined;


//objects and symbols



//typeof operator

typeof undefined // "undefined";
typeof 0 // "number";
typeof 10n // "bigint";
typeof true //"boolean";
typeof "foo" //"string";
typeof Symbol("id") //"symbol";
typeof Math //"object" (1)
typeof null //"object" (2)
typeof alert // "function" (3)