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
