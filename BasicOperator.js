//add + //sub - //Multiplication  *//division / //Remainder % //exponention ** //Remainder

let x = 1;
x = -x;
alert(x); //-1, unary negation

alert (5 % 2); //1
alert (8 ** 3); // power of 2 exponention
alert ( 4 ** (1/3)) //1.5874010519681994


let s = "my" + "String"
alert(s); // mystring
alert( '1' + '2'); //"12"
alert(2 + '1'); //'21

alert( 6 - '2') //4 convert 2  into number
alert('6' / '2')//3 conert 2 into number

//no effect on number
let x = 1;
alert( +x ); //1

let y = -2;
alert( +y )// -2

let apple = "2";
let oranges = "3";

alert (+apple + +oranges); //5

let a =  1;
let b = 2;

let c = 3 - (a = b + 1);
alert(a); // 3
alert (c); //0

let a, b, c;
a = b = c = 2 + 2;
alert(a); //4
alert(b); // 4
alert(c); //4

modify in place

let n = 2;
n *= 3 + 5;
alert( n ); //16,

//increment and decrement
let counter = 2;

counter--;
alert (counter); //1

let counter = 3;
counter++;
alert(counter); //4


let counter = 3;
let a = ++counter;
alert(a); //4

let counter = 1;
let a = counter++;
alert(a); //1  this  become  * ++counter to counter ++

let counter = 1;
alert(2 * ++counter); //4

let counter = 1;
alert(2 * ++counter); //2

let counter = 1;
alert(2 * counter++); //2 because counter++ returns  the  old  value  which is ne

//AND (&) OR (|) NOT (~) XOR(^ ) LEFT SHIFT (<<) SHIFT RIGHT(>>) ZERO-FILL RIGHT (>>>)


