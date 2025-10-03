// string -> word / sentence / character

let name = "Krish"

console.log(name)  // to print name

console.log(name[2])  // string also follow indexing so we can access to any one character

console.log(name.length);  // variable.length is to find the length of string

console.log(name.toUpperCase());  // .toUpperCase is to make all the character to the upper case
 
console.log(name.toLowerCase());  // // .toLowerCase is to make all the character to the lower case

let full_name = " Krish Gupta "
console.log(full_name.trim())  // .trim() is to remove all the unwanted space from starting and ending

let sent = "Suneel is very Bad boy"
console.log(sent.replace('Bad','Good'));  // .replace is used to replace any word 

let st1 = "i love php, we learn php"
console.log(st1.replaceAll('php','js'))  // replaceall is used to replace all the same word to a new word

let st2 = "Mujhe ghar jana hai..."
console.log(st2.repeat(10))  // repeat(no. of repetation) is a function which is used to repeat it  

let st3 = "Krish"
console.log(st3.substring(1,4))  // use to take the character between 2 indexing no. 

// Date Module 

let date = new Date()  // Date() is a function which is used to take the date in real time with the help of our system
console.log(date)  // to print date
console.log(date.getFullYear())  // to print the curent year
console.log(date.getMonth()+1)   // to print the current month in which indexing start with 0 so we will do +1
console.log(date.toDateString())  // to print the full date in string
console.log(date.toLocaleTimeString())  // to print the full time 
console.log(date.toLocaleDateString())  // to print the full date in string

///////////////////////////////////////////////////////////////////

let real = new Date()
document.querySelector('#date1').innerHTML = real.getDate()
document.querySelector('#month1').innerHTML = real.getMonth()+1
document.querySelector('#day1').innerHTML = real.toDateString()
document.querySelector('#year1').innerHTML = real.getFullYear()