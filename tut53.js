// functions are building blocks of a program that save alot of time 

function greet(name, greetText = "Greetings from JavaScript") {
    console.log(greetText + " " + name);
    console.log(name + " is an awesome developer");
}

let name1 = "Honey";
let name2 = "Shubham";
let name3 = "Rohan";
let name4 = "Raj";
let greetText = "Hola!";


// 1. Only pass those things to a functions that are being used in the functions otherwise the code will get un-optimised

// 2. Keep one function for one task, don't creat a mess! 

// 3. Make funtions easy to read 

function sum(a, b, c){
    let d = a + b + c;
    return d;
    console.log("Funtion is returned");
}

let returnVal = sum(1,2,3);
console.log(returnVal);

// greet(name1, greetText);
// greet(name2, greetText);
// greet(name3, greetText);
// let returnVal = greet(name4,);
// console.log(returnVal);
// console.log(name1 + " is an awesome developer");
// console.log(name2 + " is an awesome developer");
// console.log(name3 + " is an awesome developer");
// console.log(name4 + " is an awesome developer");