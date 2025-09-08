
let v = 0

function add(){
    document.getElementById('res').innerHTML = ++v
}

function sub(){
    document.getElementById('res').innerHTML = --v
}

function reset(){
    document.getElementById('res').innerHTML = 0
}

let cl
function change(cl){
    cl = prompt("Enter the color")
    document.body.style.backgroundColor = cl
}