//Firing event using JS

let btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{
    alert("Working")
})

//Without arrow function

let btn1 = document.querySelector('#btn1')
btn1.addEventListener('dblclick',function(){
    alert("Hello...!!!")
})