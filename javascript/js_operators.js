const foo = ["one", "two", "three"];

// one = foo[1]
// two = foo[2]

// destructuring
const [one, two, three] = foo;
console.log(two)

let num = 2
let word = '2'
// equal operator
if (num == word){
    console.log(true)
}

// strict equal operator
if (num === word){
    console.log(true)
}else{
    console.log(false)
}

const status = num == word ? "positive" : "negative";
console.log(status)