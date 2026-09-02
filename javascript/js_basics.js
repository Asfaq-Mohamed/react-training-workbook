// declarations
const num = 5;
let numerical = 4;


numerical+=2;

// print function
console.log(num)

// python function
// def greet():
//     print("Hi")
        // return num


// js - normal function
function greet(name){
    console.log("Hi",name)
}
greet("alex")


// js - arrow function
const arrow = (num) => {
    multiply = num * 2
    return multiply
}

const arrow2 = (num) => num * 2;
console.log(arrow2(2))

//  if statement
if (true){
    console.log("if statement");
}else if (false) {
    console.log("el if");
}else {
    console.log("else block");
}

// loops
for(let num=0;num<=5;num++){
    console.log(num)
}

//array 
let arr = [1,2,3,4,5]
console.log(arr[2])

// object 
let obj = {
    "name": "conor",
    "num": 5,
    "arr": [1,3,4,6]
}

console.log(obj.arr[1])

// map function
const multiplied = arr.map((num)=>num*2)
console.log(multiplied)

//filter function
const greater = arr.filter((num)=>num>3)
console.log(greater)



// undefined
let red;

console.log(red)
