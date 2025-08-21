//WAP to take string "Hello" from the user and compare it if "Hello" is equal to "Hello" then print "Hello World"?
/*
let ui = prompt("Enter HELLO")
if(ui === "hello"){
    console.log("Hello World")
}
else{
    console.log("invalid input");
}
*/
//WAP to check user's age is greater then 23 or not ?
/*
let age = parseInt(prompt("Enter ur age"))

if(age>23){
    console.log("Greater");
}
else{
    console.log("Smaller");
}
  */  

//WAP to check number is odd or even . if number is odd then find out area of circle if even then square of that number
/*
let num = parseInt(prompt("Enter any number"))

if(num%2==0){
    console.log("Its Even and Square of that number is =" + num*num);
}
else{
        console.log("Its Odd and area of circle of that number is =" + 3.14*num*num);

}
  */      

//WAP to make student grade finder   Take inputs of 5 subjects then print the grade       according to percentage
/*
let sub1 = parseInt(prompt("Enter 1st subjest marks"))
let sub2 = parseInt(prompt("Enter 2nd subjest marks"))
let sub3 = parseInt(prompt("Enter 3rd subjest marks"))
let sub4 = parseInt(prompt("Enter 4th subjest marks"))
let sub5 = parseInt(prompt("Enter 5th subjest marks"))

let total = sub1+sub2+sub3+sub4+sub5
let percentage = ( total / 500) * 100;

if(percentage>=90){
    console.log("The pecentage is = " + percentage + " The grade is= " + "A");
}
else if(percentage>=80){
    console.log("The pecentage is = " + percentage + " The grade is= " + "B");
}
else if(percentage>=60){
    console.log("The pecentage is = " + percentage + " The grade is= " + "C");
}
else if(percentage>=40){
    console.log("The pecentage is = " + percentage + " The grade is= " + "D");
}
else{
    console.log("The pecentage is = " + percentage + " The grade is= " + "F");
}
*/

//Take 3 inputs from the user and check 3 is +ve or -ve  if number is positive then check it even or odd, if    even then add all 3 inputs  
// if number is -ve then multiply of all inputs?

let x = parseInt(prompt("Enter 1st a number"))
let y = parseInt(prompt("Enter 2nd a number"))
let z = parseInt(prompt("Enter 3rd a number"))
let add = x+y+z

if(x>0 && y>0 && z>0){
    console.log("All the numbers are positive");
    if(add%2==0){
        console.log("Its even and the addition is = " + add);
    }
    else{
        console.log("Its odd");
    }
}
else if(x<0 && y<0 && z<0){
    console.log("All the numbers are negative");
    console.log("The multiplication = " + x*y*z);
}
else{
    console.log("invalid input");
    
}
  