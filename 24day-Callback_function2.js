//setinterval

// setInterval(() => {
//    console.log("Working...") 
// }, 3000);

let st
let v = 0
function start(){
    let counter = document.querySelector('#counter')
    st =  setInterval(() => {
       counter.innerHTML = v++ 
    }, 500);
}

function stop(){
    clearInterval(st)  //CLEARINTERVAL use to stop the interval function
}

function reset(){
    v = 0
    document.querySelector('#counter').textContent = v
    stop(v)
}