let x = 20
let y = 0

while(x>1){
    if(x%2==1){
        console.log(x);
        y=x+y
        console.log("the sum = " + y);
    }
    x--
}