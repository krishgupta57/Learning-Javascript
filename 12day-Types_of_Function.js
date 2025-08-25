//without argument and with return value
/*
function Add(){
    let a = 10
    let b = 90
    return a+b
}

console.log(Add());

let result = Add()
console.log(result);
*/

//with argument and with return value  type 3
/*
function Demo(num){
    return num*num
}

console.log(Demo(10))
*/

//WAP to take name from the user and return it using type 3
/*
function Name(x){ 
    return x
}
let x = prompt("Enter ur name")

console.log(Name(x));
*/

//WAP to take input from the user and return it square using type 3
/*
function Square(num){
    return num*num
}
let num = parseInt(prompt("Enter a number"))

console.log(Square(num))
*/

//WAP to find sum of all no. between 1 to 10 using type 4

let b = 0
function Sum(){
    for(let a = 1; a<=10; a++){
        b = a+b
    }
    return b
}

console.log(Sum())