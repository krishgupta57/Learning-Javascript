let num = [31,54,5,6,7,89,9,5,2,5,8,9,6,5,2,5,8,9,6,2,5,58,8,9,6,2]

console.log(num.length)  //to find the length of array

//to print all the elements present in array

for(let i = 0; i<num.length; i++){
    console.log(num[i])
}

let student = ["Krish",22,"Bhopal"]

student.push("Indian",45)  // we use push function to add the multiple elements in an array at the end
console.log(student)


student.unshift("Mr")  // we use unshift function to add the multiple elements in an array at the starting 
console.log(student)


student.pop()  // we use pop function to remove the last element in an array
console.log(student)

student.shift()  // we use shift function to remove the first element in an array
console.log(student)

let student1 = ["Rishav",22,"Bina","Indrapuri","LNCT","CSE"]

let cut = student1.slice(1,4)  // we use slice function to take a part of array // slice(Start index,end index+1)
console.log(cut)


// WAP to print the odd no. from thr given array
let digit = [10,15,1,3,8,7,6,5]

let cdigit = digit.slice(0,5)
console.log(cdigit);

for(let i =0; i<cdigit.length; i++){
    if(cdigit[i]%2 != 0){
        console.log(cdigit[i])
    }
}

let digit1 = [10,15,1,3,8,7,6,5]

digit1.splice(3,2,"Krish")   // we use splice function to remove a part of array and add a new element of array // slice(index no. , no. of elements , adding elements)
console.log(digit1)

