// for of loop  // use to print all element in an array

let emp = [6546,654564,21,48,531,48,]
for(let a of emp){
    console.log(a);
}
 
// for in loop // use to print the index no. in an array
 
for(let b in emp){
    console.log(b);
}

//WAP to print sum of all no. in an array between 15 to 2

let num = [15,14,13,12,11,10,9,8,7,6,5,4,3,2]
let sum = 0

for(let x of num){
    sum = x+sum 
}
console.log(sum)