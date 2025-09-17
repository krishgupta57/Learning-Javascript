// Array => collection of different type of elements
// denoted by square bracket []
// it is ordered -> it includes (address/position of elements)
// indexing will start from 0 onwards 

let person = ["Krish",22,"Beohari",5.9,true]
console.log(person);

console.log(person[0]);  // to print particular element of the array
console.log(person[1]);  // to print particular element of the array
console.log(person[2]);  // to print particular element of the array
console.log(person[3]);  // to print particular element of the array
console.log(person[4]);  // to print particular element of the array

// to repeat it for large no. of elements we use loop

for(let a=0; a<5; a++){
    console.log(person[a])
}

// WAP to take 5 input from user and print it in array

// let student = []

// for(let b = 0; b<5; b++){
//     student[b]= prompt("Enter the student name")
// }
// console.log(student)

//WAP to print odd no. in an array between to 15 to 1

let odd = [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]

for(x = 0; x<15; x++){
    if(odd[x]%2==1){
        console.log(odd[x])
    }
}