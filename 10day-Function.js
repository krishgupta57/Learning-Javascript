// basic sentax
/*
function Add(){
    let a = 10
    let b = 50
    console.log(a+b);
}

Add()
*/


//WAP to find area of circle using function and area should be taken for the user
/*
function Area(){
    let r = parseInt(prompt("Enter radius of circle"))
    console.log(3.14*r*r)
}

Area()
*/

//WAP there is range of 1-10 if no. is between 1-5 then print the table of that no. if 6-10 then print all the odd no. square of between 1-10

function Range(){
    let x = parseInt(prompt("Enter any no. between 1 to 10"))
    let y = 0
    if(x >= 1 && x<=5){
        for(y=1; y<=10; y++){
            console.log(x + "*" + y + "=" + x*y);
        }
    }
    else if (x >= 6 && x<=10){
        for(x=1; x<=10; x++){
            if(x%2!=0){
                console.log(x*x)
            }
        }
    }
    else{
        console.log("Invalid input")
    }
}

Range()