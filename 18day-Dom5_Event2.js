function Add(){
    let a = parseInt(prompt("Enter first no."))
    let b = parseInt(prompt("Enter second no."))
    let c = a+b

    let x = document.getElementById('ans')
    x.textContent = c
    x.style.cssText = "color:red; padding:20px; background-color:black; border-radius:50px "
}

let x = document.getElementById('res')
let ch = false

function Move(){
    if(!ch)
    {
        x.style.cssText = "position:relative; left:50%"
        ch=true
    }
    else{
        x.style.cssText = " left:0%"
        ch = false
    }
}
