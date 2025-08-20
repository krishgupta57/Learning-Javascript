/*
for(let a = 1; a<=10; a++){
    console.log(a);
}

for(let n = 10; n>=1; n--){
    console.log(n)
}
*/
//WAP to print a table of any number using for loop?
/*
let x = parseInt(prompt("Enter any Number"))
let y
for(y=1; y<=10; y++){
    console.log(x + "*" + y + "=" + x*y);
}
*/
//WPA to print square of the range 25 to 1
/*
let a
let b = 1
for( a = 25; a>=1; a--){
    if(a%2==1){
        console.log(a*a);
    }  
    else{
        b=a*b
    }
}
console.log("The multiplication of even no. = " + b);
*/

//WPA to check user input is even or not and if even print reverse table or if odd print that no.
/*
let num = parseInt(prompt("Enter a number"))

if(num%2==0){
    for(let a = 10; a>=1; a--){
        console.log(num*a)
    }
}
else{
    console.log(num);
}
*/

//WPA to print the number from 1-15 except 5 or 10

for(let num1 = 1; num1<=15; num1++){
    if(num1==5 || num1==10){
        console.log("");
    }
    else{
        console.log(num1);
    }
}