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
/**************** Step-10 **********/
//stack and head memory in js

/*
Stack (Primitive Jaha per sare primitive data type hote hai waha per stack memory hota hai);
Heap (Non-Primitive Java per sare non primitive data types hote hai waha per Heap memory hota hai); 


*/

/*
let myname="Chhotelal Patel";
let anothername=myname;
console.log(myname);//Chhotelal Patel
console.log(anothername);//Chhotelal Patel

anothername="vikas patel";
console.log(myname);//Chhotelal Patel
console.log(anothername);//vikas patel


let userOne={
  email:"chhotupatel5@gmail,com",
  upi:'user@yble',
}

let userTwo=userOne;
userTwo.email="pc@gmail.com";

console.log(userOne.email);//pc@gmail.com
console.log(userTwo.email);//pc@gmail.com

*/

/************8 Lecture-11 **********S
//String

/*
1.String Interpoletion: iN String Inter polation access the variable name in side the string.

*/

/*

const myname="Chhotelal Patel";
const repoCount=22;

console.log(Hello my name is ${myname} and my repo count is ${repoCount});


const getName=new String('Chhotelal Patel Singh');
console.log(getName);//[String: 'Chhotelal Patel Singh']
console.log(getName[0]);//c
console.log(getName[1]);//h
console.log(getName.length)//21
console.log(getName.toLocaleUpperCase());//CHHOTELAL PATEL SINGH
console.log(getName.charAt(5))//e
console.log(getName.indexOf('t'));//4
console.log(getName.substring(0,4))//chho (I this case lase index is not include and it does not modify the origanal array)


const anotherString1=getName.slice(0,4);//Chho (I this case lase index is not include and it does not modify the origanal array)
console.log(anotherString1)//chho
const anotherString2=getName.slice(-6,4);
console.log(anotherString2);


const newStringOne="          Chhotelal Singh                ";
console.log(newStringOne);//           Chhotelal Singh                
console.log(newStringOne.trim());//Chhotelal Singh (Trim FUNCTION are used to remove the space from the staring and ending)
const url="https://chhotelal.com/%20patel@gmail.com";
console.log(url.replace('%20', '--'));//https://chhotelal.com/--patel@gmail.com
console.log(url.includes('Patel'));//false

let mynewname="Chhotella-singh-Patel";
console.log(mynewname.split('-'));//[ 'Chhotelal', 'singh', 'Patel' ]


*/

/***********Step-12 ************/

/*
//Number
const score = 400;
console.log(score); // 400

const balance = new Number(100);
console.log(balance); //[Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(2).toString().length); //6

const otherName = 123.8966;
console.log(otherName.toPrecision(3)); //124
console.log(otherName.toPrecision(4)); //123.9
const otherNames = 1123.8966;
console.log(otherNames.toPrecision(3)); //1.12e+3

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-In")); //10,00,000

//Math
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3.4)); //3
console.log(Math.round(3.6)); //4
console.log(Math.round(3.5)); //4
console.log(Math.ceil(2.1)); //3
console.log(Math.floor(4.8)); //4
console.log(Math.max(1, 2, 3, 5, 6, 7, 8)); //8
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8)); //1





console.log(Math.random());
console.log(Math.random() * 10 + 1); // it is give always valu betweene 1 to 10 with decimal value
console.log(Math.floor(Math.random() * 10 + 1)); //It is give the always inter value between 1 t0 10
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


*/

/**********************************************************Step-13************************************/
//Date and Time

/*

let myDate = new Date();
console.log(myDate); //2025-01-03T23:55:25.468Z
console.log(myDate.toString()); //Sat Jan 04 2025 05:36:06 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Sat Jan 04 2025
console.log(myDate.toLocaleDateString()); //1/4/2025
console.log(myDate.toLocaleString()); //1/4/2025, 5:36:06 AM
console.log(myDate.toJSON()); //2025-01-04T00:21:35.549Z
console.log(myDate.toISOString()); //2025-01-04T00:22:50.427Z
console.log(myDate.getDate()); //4 this function is used to give the date in in month betweeen 1 to 31
console.log(myDate.getDay()); // this function is used to give the day in 0 to 6
console.log(myDate.getFullYear()); //2025
console.log(myDate.getHours()); //
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes());
console.log(myDate.getMonth()); // 0 this funcion is use to give the month betweeen 0 to 11
console.log(myDate.to);

//console.log(typeof myDate); //object

let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate);
console.log(myCreateDate.toDateString());//Mon Jan 23 2023

let myCreateDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreateDate.toLocaleDateString()); //1/23/2023
console.log(myCreateDate.toLocaleString()); //1/23/2023, 5:03:00 AM

*/

//timestamp
// time stamo must be used when design the quze, polls  cases me
/*
let myTimestamp = Date.now();
console.log(myTimestamp); // 1735952587805   it is give the current time in milisecond
console.log(Math.floor(myTimestamp / 1000)); //1735952663 IT IS giev the current time in second
*/

/*
Example
const date = new Date();

step:1.Get the day of the week (0 to 6, where 0 is Sunday, 1 is Monday, etc.)
const weekdayIndex = date.getDay();

step: 2.Get the month (0 to 11)
const monthIndex = date.getMonth();

step:3.Arrays containing full names of weekdays and months
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


const fullWeekday = weekdays[weekdayIndex];
const fullMonth = months[monthIndex];

console.log("Day: " + fullWeekday); 
console.log("Month: " + fullMonth); 

*/

/******************************************* Step-14 ***********************************/
//Array
//point-1 declaration of array
// const arr1 = [1, 2, 3, "Hello"];
// const arr2 = new Array(1, 2, "Raj");

// console.log(arr1[0]); //1
// console.log(arr2[1]); //2

//Point-2 Array method
/*
1.push()->It is used to insert the element at the end of the arry

2.pop()->thsi metod id used to remove the element at end of the array

3.unshift()->thsi method is used to indert the elemet at begining of the array

4.shift()->this method is used to remove the element at the beging of the aray

5.includes()->this method used to chek the element persent in the arry or not if persetn the return true other wise false

6.indexOf()->this method is used ot chek the elelmetn persent in tha array or not if persent then return the first index of the element if not persetn then it is return -1;

7.join()->this method is used to convert the element of the array in to the srting and it is also used on inserting the seperator between the array element.
let newArray = arr1.join("-");
console.log(newArray); output : 1-2-3-Hello iska type string hai

8.slice()->this method is used to creat the sub part of the the aray and it will not modifiey the the origanal array and last index is not include
syntax: arr_ref.slice(start_index, last_index);
let arr = [1, 2, 3, 4, 5, 6];
let newArra1 = arr.slice(0, 4);
console.log(newArra1);
output: [ 1, 2, 3, 4 ]

9.splice()-> this method is used to perform the operation on the arrray like inserting , upateting, deleting
synatx: arr_ref.splice(start_index, delete_count, indert_newElement);

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(0, 1));//[ 1 ]
console.log(arr);//[ 2, 3, 4, 5, 6 ]



let arr = [1, 2, 3, 4, 5, 6];
arr.splice(0, 0, 10)
console.log(arr); //[ 10, 2, 3, 4, 5, 6 ]



let arr3 = [1, 2, 3, 4];
let arr4 = arr3.push(10);

console.log(arr3); //[ 1, 2, 3, 4, 10 ]
console.log(arr4); //5 here 5 repersent the length of the array

console.log("Origanal array : ", arr3); //Origanal array :  [ 1, 2, 3, 4, 5, 6 ]

let arr = [
  1,
  2,
  3,
  4,
  {
    z: 7,
    name: "Hello",
  },
];

let arr5 = arr.slice(0);
arr5[4].name = "B.Tech";
console.log(arr);
console.log(arr5);

*/

/*********************************************** Step-15 ************************/
//Array-2

/*

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
arr1.push(arr2);
console.log(arr1); //[ 1, 2, 3, 4, [ 5, 6, 7, 8 ] ]

let arr3 = [1, 2, 3, 4, 5];
let arr4 = [6, 6, 8];
let arr5 = arr3.concat(arr4);
console.log(arr5); //[1, 2, 3, 4, 5, 6, 6, 8]

//spred operator
let arr6 = [...arr3, ...arr4];
console.log(arr6);
[1, 2, 3, 4, 5, 6, 6, 8];

let arr7 = [...arr3, arr5];
console.log(arr7); //[1, 2, 3, 4, 5,[ 1, 2, 3, 4, 5, 6, 6, 8]]

let arr8 = [1, 2, 3, 4, [5, 6, 7, 8], 7, [9, 10, [6, 6, 8]]];
let arr9 = arr8.flat(Infinity);
console.log(arr9); //[ 1, 2, 3, 4,  5, 6, 7, 8, 7, 9, 10, 6, 6, 8]

console.log(Array.from("Chhotelal")); //['C', 'h', 'h','o', 't', 'e','l', 'a', 'l']
console.log(Array.from("hi RJ"));//[ 'h', 'i',' ', 'R', 'J' ]

*/

/************************************* Step-16***************************** */

/*
//Object
//1.Object literal

let syKey = Symbol("key1");

const JsUser = {
  name: "Chhotelal",
  fullName: "Chhotelal Patel",
  age: 18,
  location: "jaiypur",
  email: "hp@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday", "Saturday"],
  [syKey]: "mykey1",
};

// console.log(JsUser.email); //hp@gmail.com
// console.log(JsUser["email"]); //hp@gmail.com
// console.log(JsUser["fullName"]); //Chhotelal Patel
// console.log(JsUser[syKey]); //mykey1

//console.log(JsUser);
//output:
// {
//   name: 'Chhotelal',
//   fullName: 'Chhotelal Patel',
//   age: 18,
//   location: 'jaiypur',
//   email: 'hp@gmail.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Sunday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }

//JsUser.email = "pc@gmail.com";
//console.log(JsUser);

// output:
// {
//   name: 'Chhotelal',
//   fullName: 'Chhotelal Patel',
//   age: 18,
//   location: 'jaiypur',
//   email: 'pc@gmail.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Sunday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }

//Object.freeze(JsUser);
//JsUser.email = "raj@gmail.com";
//console.log(JsUser);

// output:
// {
//   name: 'Chhotelal',
//   fullName: 'Chhotelal Patel',
//   age: 18,
//   location: 'jaiypur',
//   email: 'pc@gmail.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Sunday', 'Saturday' ],
//   [Symbol(key1)]: 'mykey1'
// }

JsUser.greeting = function () {
  console.log("Hello JS User");
};

console.log(JsUser.greeting); //[Function (anonymous)] this is the refernce of the function
console.log(JsUser.greeting()); //Hello JS User

JsUser.greetingTwo = function () {
  console.log(` Hello js user, ${this.name}`);
};

console.log(JsUser.greetingTwo()); //Hello js user, Chhotelal

*/

/*********************************Step-17 *********************************/

// const tindeluser={} ->it it is the non singlton object
//const tindluser=new Object()->it is the singlton object

//nested object
// const regularUser = {
//   email: "pc@gmail.com",
//   fullname: {
//     userfullname: {
//       firstname: "Chhotelal",
//       lastname: "Patel",
//     },
//   },
// };

//console.log(regularUser.fullname.userfullname.firstname);//Chhotelal

//merging object

// const obj1 = {
//   a: 1,
//   b: 2,
// };
// const obj2 = {
//   c: 3,
//   d: 4,
// };

// const obj3 = { obj1, obj2 };
// console.log(obj3);//{ obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } }

// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3); //{ a: 1, b: 2, c: 3, d: 4 }

// let obj4 = { ...obj1, ...obj2 };
// console.log(obj4);

//Object Inbuilt Method
/*

const JsUser = {
  name: "Chhotelal",
  fullName: "Chhotelal Patel",
  age: 18,
  location: "jaiypur",
  email: "hp@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday", "Saturday"],
};

console.log(JsUser);
console.log(Object.keys(JsUser)); //['name', 'fullName', 'age', 'location', 'email', 'isLoggedIn', 'lastLoginDays']
console.log(Object.values(JsUser));
output: [
  "Chhotelal",
  "Chhotelal Patel",
  18,
  "jaiypur",
  "hp@gmail.com",
  false,
  ["Monday", "Sunday", "Saturday"],
];

console.log(Object.entries(JsUser));

output: [
  ["name", "Chhotelal"],
  ["fullName", "Chhotelal Patel"],
  ["age", 18],
  ["location", "jaiypur"],
  ["email", "hp@gmail.com"],
  ["isLoggedIn", false],
  ["lastLoginDays", ["Monday", "Sunday", "Saturday"]],
];

console.log(JsUser.hasOwnProperty("isLoggedIn")); //true


*/
