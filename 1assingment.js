//1.Declare a variable using var, assign it a value, then reassign it with a new value and print both.
/*
var first = 20
console.log(first)

first = 50
console.log(first)
*/

//2.Take 2 inputs from the user and find the area of triangle
/*
let base = parseInt(prompt("Enter the base"))
let height = parseInt(prompt("Enter the Height"))

console.log(0.5*base*height)
*/

//3.Create two variables using let, assign them numbers, then swap their values using a temporary variable.
/*
let a = parseInt(prompt("Enter the first no."))
let b = parseInt(prompt("Enter the second no."))

let c = a
a=b
b=c
console.log(a+" "+b)
*/

//4. Make simple calculator, take 2 integer inputs and one sign input (+-*/) and perfome the calculation
/*
let x = parseInt(prompt("Enter the First no."))
let y = parseInt(prompt("Enter the Second no."))
let z = prompt("Enter the sign")

if(z == "+")
    {
        console.log(x+y)
    }
else if(z == "-")
    {
        console.log(x-y)
    }
else if(z == "*")
    {
        console.log(x*y)
    }
else if("/")
    {
        console.log(x/y)
    }
else
    {
        alert("Invalid Assingment")
    }
*/

//5. Take radius from the user and find area of circle.
/*
let r = parseInt(prompt("Enter the Radius"))

console.log(3.14*r*r)
*/

//6. Take a Celsius temperature in a variable and convert it to Fahrenheit.
/*
let c = parseInt(prompt("Enter the Celsius"))

console.log(c*9/5+32)
*/