/*************************************** step-1************************************************/
//Practice Realword proble the yoyr master in js

//*************************************** step-2************************************************/
//console.log("Hello");

/*******************************************step-3************************************************/

/*
1.when i declared a variable using let but do not assign the value and print then the output is undefined.

2.prefeer not used var because of issue in scope and functional scope

3.when we do not decalred type of variabl but i want to assign and print the that variable is globle varible
  and type varible is which type of value is assign to that variable.

4.variable decalred with let can not redeclared int the same in the same scope and upadte the value varaiable any time.
5.varible declared with var can be redeclared in the same in the same scope and update the value of the any times.
6.variable declred wiht const can not redeclared int the same in the same scoope and once vale decalred can not be update.



*/

/*
const accountID = 1123;
let accountEmail = "hello@gamil.com";
var accountPassword = "12345";
accountcity = "kanpur";

// accountID = 2; do not reassign value in const variable and also do not redeclared
// console.log(accountID);

accountEmail = "pc@gmail.com";
accountPassword = 22333333;
accountCity = "Jaiypur"; // type of this variable is globle variable

let accontState;


console.table([
  accountID,
  accountEmail,
  accountPassword,
  accountCity,
  accontState,
]);

*/

// let a = 10;
// console.log(a);
// if (1) {
//   let a = 4;
//   console.log(a);
// }

// let a = 10;
// var b = 20;
// function fun() {
//   console.log(a);
//   console.log(b);
// }
// fun();

// function fun2() {
//   console.log(a);
//   console.log(b);
// }
// fun2();

/***************************************** step-5 ************************************ */
//Data types and ECMA
/*
1. "use strict"; when i used this then treat all the js code as newer version.
2.alert(3+3) this methode is not used in the node js only used in the browser.
if it iused in the browser show the popup message with ok button
*/

/*
let age = 18;
let isLogedIn = false;
let state = null;

// alert("hello");
//number=> 2 to power 53
//bigint
//string=>""
//boolean=>true/false
//null->it is a repersention of emplty value
//undefined->reoersent do not assign the  value
//symbol->this data types is used for unique
//object

console.log(typeof age); //numner
console.log(typeof null); //object
console.log(typeof undefined);//undefined

*/

/***************************************** step-6 ************************************ */
//data type conversion
// let score = 33;
// console.log(typeof score);// number
// console.log(typeof score);//number

/*
Important Note
if need to conver value in the number used Number() function

if need to conver value in the string used String() function

if need to conver value in the boolean used Boolean() function

*/

/*
let score = "33";
let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number

let score2 = "3abc";
let valueInNumber2 = Number(score2); //here convervsion string to number but in h=this case not convert
console.log(typeof valueInNumber2); //Number
console.log(valueInNumber2); //NaN

let score3 = null;
let val = Number(score3);
console.log(typeof val); //number
console.log(val); // 0

let score4 = undefined;
let val2 = Number(score4);
console.log(typeof val2); //number
console.log(val2); //NaN

let score6 = "hello";
let val3 = Number(score6);
console.log(typeof val3); //number
console.log(val3); //NaN

let score7 = true;
console.log(Number(score7));//1
console.log(typeof Number(score7));//number
*/

/*
let isLoged = 1;
console.log(Boolean(isLoged)); //true

let isLoged2 = "";
console.log(Boolean(isLoged2)); //false
console.log(Boolean(" ")); //true
console.log(Boolean("Chhotelal")); //true

*/

/*
console.log(Boolean(null));//false
console.log(typeof Boolean(null));//boolean

console.log(Boolean(undefined));//fasle
console.log(typeof Boolean(undefined));//boolean

*/

/*
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); //33
console.log(typeof stringNumber); //string

console.log(String(undefined)); //undefined
console.log(typeof String(undefined)); // string

console.log(String(null)); //null
console.log(typeof String(null)); //string

console.log(String(true));//true
console.log(typeof String(true));//string

*/

/*******************************step-7  **********************************/
//Operation
/*
console.log(2 ** 3); //8
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
console.log(+true);//1
console.log(+"");//0
*/

/**********************************step-8 comparision *******************************/

/*
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true (Because here null conver into the zero)

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

console.log("2" === 2);//false
console.log(2===2);//true


*/

/******************************************* step-9 *****************************/
//data type summary
/*
1.primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


2.Non Primitive
//Array, Objects, Function

*/

/*
const id1 = Symbol("123");
const id2 = Symbol("123");

console.log(typeof id1); //symbol
console.log(typeof id2); //symbol

console.log(id1); //symbl(123)
console.log(id2); //symbl(123)

console.log(id1 == id2);//false

*/

/*
let myArray = [1, 2, 3, 4, 5, 6];

let myObject = {
  a: 10,
  b: 20,
  c: 30,
};

let myFunction = function () {
  console.log("hello");
};

myFunction();

console.log(typeof myArray);//object
console.log(typeof myObject);//object
console.log(typeof myFunction);//function object(function)

*/
