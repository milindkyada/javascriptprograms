//two type of data types
// 1.primitve data type
    /*Number
    BigInt
    String
    Boolean
    Symbol
    null
    undefined*/

// 2.non-primitve data type 
    /*array
    object
    function*/


// 1.primitve data type    

 /*let num=1;
 let num2=2;

 console.log("num",num,num2)*/


 /*let name="milind";
 let name2="mahil";
 console.log("names:",name2,name);*/


 /*let isTrue=true;
 let isFalse=false;
 console.log("boolean:",isTrue );*/

/* let a;
console.log(undefined);*/


 





 //2. non primitve
 // object

 /*let student={
    name:"miind",
    roll:18,
    address:{
        city:"ksd"
    }
 }
 console.log(student);*/


 //array

 /*let a =[1,2,3,4,5,6,7,8,9];
 console.log(a);*/


 //function

 /*function greet(){
    console.log("this is function");
 }
 greet();
 function showValues(value){
    console.log("this is value:",value);
    if(value==20){
        console.log("number-----");
    }
 }
 showValues();
 showValues(20);
 showVAlues([1,2,3,4,5]);*/

 /*function arithmatic(a,b){
    console.log("addition:" ,a+b);
    console.log("subtraction:", a-b);
    console.log("multiplication:", a*b);
    console.log("division:", a/b);
 }
 arithmatic(10,5);*/
 

 // arrow function

/*const add =(a , b) => a + b;
const div =(a , b) => a / b;
const multi =(a , b) => a * b;
const sub =(a , b) => a - b;
console.log("Addition :", add(30, 20));
console.log("Division:", div(10, 20));
console.log("Multiplication:", multi(30, 20));
console.log("Subtraction:", sub(10, 20));*/


//Assignment Operators

/*let value = 10;
console.log("Initial Value:", value);

value += 5;
console.log(" += 5:", value);

value -= 3;
console.log(" -= 3:", value);

value *= 2;
console.log(" *= 2:", value);

value /= 4;
console.log(" /= 4:", value);*/


//Logical Operators
//  let age = 20;
// let hasID = true
// let name="milind";
// let obj={
//     name:'example',
//     rollno:18
// }

// console.log("Logical AND (&&):", age > 18 && hasID); 
//  console.log("Logical OR (||):", age < 18 || hasID); 
// console.log("Logical NOT (!):", !hasID);

// console.log(typeof age)
// console.log(typeof hasId)
// console.log(typeof name)
// console.log(typeof obj)



//comparison operators
let val = 20;
let number = "20";

console.log("value == number:", val == number);
console.log("value === number:", val === number); 
console.log("value != number:", val != number); 
console.log("value !== number:", val !== number);
console.log("value > 15:", val > 15); 
console.log("value < 25:", val < 25); 
console.log("value >= 20:", val >= 20); 
console.log("value <= 30:", val <= 30); 