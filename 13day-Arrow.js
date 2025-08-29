//Syntax

//() => {return}
//() => ()
// =>

// Arrow function without parameter

let fun = () => {return "Inisde Function"}

console.log(fun);
console.log(fun());

let fun1 = () => (2+4)
console.log(fun1());


// Arrow function with parameter

let fun2 = (a,b) => (a*b)
console.log(fun2(4,5));

//type 3

let fun3 = name => name
console.log(fun3("Krish"));


//WAP to find area of circle usimg arrow function with parameter

let circle = (r) => (3.14*r*r)
console.log(circle(5));

//WAP to take input from the user and print its square usimg arrow function with parameter

let x = parseInt(prompt("enter any no."))
let y = () => (x*x)

console.log(y());