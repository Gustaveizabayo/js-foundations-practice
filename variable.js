let message;
message = "Hello world!";
alert(message);

let user = "john"; 
let age= 25; 
let message = "hello"

let message = "this";
let message = "that";// syntax  error because 'message' has  aldready declared

//variable naming

let userNmae;
let test123;

//using camelcase

let $ = 1; //declared variable with name '$'
let _ = 2; //declared variable with name '_'

alert($ + _); //3

//reserved words

let let = 5; //can't name a variavle "let",error!
//let return = 5; //can't name a variable "return"

//note: no "use strict" in the example

num = 5;
alert(num); // 5  this  will be excuted

// using "use strict"

"use strict";
num =5; //error : num is not defined\

//different btn var and let 

//var is  function scoped

function varTest() {
    if (true) {
        var name = "john";
    }
    console.log(name); // john
}

vartest();

//let is  blocked scoped

function letTest() {
    if (false) {
        let name = 'john';
    }
    console.log(name); // ereferencerror: name is  not defined
}

letTest();
//the variable disappears after the  if block ends

//Redeclaration

var age =20;
var age = 30;
console.log(age);//30

let age = 20;
let age = 30;
console.log(age); //SyntaxError: 'age' has alredy decleared

//Reaasigned

let city = "kigali";
city = "musanze";
console.log(city) //musanze
 
//Hosting

console.log(name);
var name = "Alice"; //undefined

var name ;
console.log(name);
name = "Alice"; //Alice;



//use let when the variable's  value may  change
//use const when the  value should not change
// avoid var in mordern js its function scope and redeclarition behavior can lead to subte bugs